import axios from 'axios';
import { ref } from 'vue';

export const useConfiguration = () => {
    const accountName = 'diva-e-preview.bloomreach.io';
    const channelName = 'nuxt3-channel';
    let pathName = '/'

    let pathSearch
    if (typeof window !== 'undefined') {
        pathSearch = window.location.search
    }

    const configuration = ref({
        path: `${pathName}${pathSearch}`,
        endpoint: `https://${accountName}/delivery/site/v1/channels/${channelName}/pages`,
        httpClient: axios,
    })

    return { configuration }
}
