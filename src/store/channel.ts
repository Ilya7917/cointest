import axios from 'axios';
import { defineStore } from 'pinia'
import { isProxy, toRaw } from 'vue';
import { useUserStore } from './user';

export interface Channel {
    id: number;
    title: string;
    invite_link: string;
    reward: number;
    avatar_url?: string;
    is_available: boolean;
};

export interface ChannelMember {
    ChannelID: number;
    UserId: number;
    Status: string;
    UpdatedAt: Date | null;
    CreatedAt: Date | null;

}

export const useChannelsStore = defineStore('channels', {
    state: () => ({
        channels: null as Channel[] | null,
        myChannels: null as ChannelMember[] | null,
    }),
    getters: {
        getChannels: (state) => state.myChannels,
    },
    actions: {
        async fetchChannels() {
            const userStore = useUserStore();
            const response = await axios.get<Channel[]>(`${import.meta.env.VITE_API_HOST}/channels`, {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                }
            });
            this.channels = response.data;
            console.log(response.data);
        },
        async startChannel(channel: Channel) {
            const userStore = useUserStore();
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/initUserChannel`,
                {
                    id: channel.id
                },
                {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                },
            });
            this.myChannels = response.data.channels
            return true;
        },
        async getMyChannels(){
            const userStore = useUserStore();
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/getMyChannels`, {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                }
            });
            this.myChannels = toRaw(response.data.channels)
        }
    },
})