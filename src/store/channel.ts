import axios from 'axios';
import { defineStore } from 'pinia'
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
    channelId: number;
    userId: number;
    status: string;
    updatedAt: Date | null;
    createdAt: Date | null;

}

export const useChannelsStore = defineStore('channels', {
    state: () => ({
        channels: null as Channel[] | null,
        myChannels: null as ChannelMember[] | null,
    }),
    actions: {
        async fetchChannels() {
            const userStore = useUserStore();
            const response = await axios.get<Channel[]>(`${import.meta.env.VITE_API_HOST}/channels`, {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                }
            });
            this.channels = response.data;
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
            alert(response.data)
            this.myChannels = response.data.channels
            return true;
        }
    },
})