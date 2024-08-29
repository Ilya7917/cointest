import axios from 'axios';
import { defineStore } from 'pinia'
import { isProxy, toRaw } from 'vue';
import { useUserStore } from './user';
import Balance from '@/components/account/Balance.vue';

const userStore = useUserStore()

const { setUser } = userStore


export interface Clan {
    ID: number;
    OwnerID: number;
    OwnerName: string;
    OwnerPicture: string;
    ClanName: string;
    ClanPicture: string;
    Description: string;
    MemberCount: number;
}

export interface ClanMember {
    ID: number;
    ClanID: number;
    UserID: number;
    UserName: string;
    UserPicture: string;
    Status: string;
    Role: string;
}


export interface newClanResponse {
    name: string;
    image: File | null;
    description: string;
}

export const useClansStore = defineStore('clan', {
    state: () => ({
        clans: null as Clan[] | null,
        clanMembers: null as ClanMember[] | null,
    }),
    getters: {
    },
    actions: {
        async getClans(){
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/getAllClans`, {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                }
            });
            console.log(response);
            this.clans = response.data;
        },
        async createClan(clan: newClanResponse)
        {
            if(!userStore.getAccessToken) return;
            const formData = new FormData();
            if(clan.image != null) formData.append('image', clan.image);
            formData.append('description',  clan.description);
            formData.append('clanname',     clan.name);

            const response = await fetch(`${import.meta.env.VITE_API_HOST}/createClan`, {
                method: 'POST',
                body: formData,
                headers: {
                    'x-api-key': userStore.getAccessToken,
                }
              });
              const result = await response.json();
              console.log(result);
              if(result.sucess) return true;
              return false;
        },
        async createClanMember(clanId: number)
        {
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/createClanMemberRequest`,
                {
                    clan_id: clanId
                },
                {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                },
            });
            console.log(response);
            if(response.data.sucess) return true;
            return false;
        },

        async getClanMembers(clanId: number) {
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/getClanMembers`, {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                    'id': clanId
                }
            });
            console.log(response);
            this.clanMembers = response.data;
            return response.data;
        },

        async acceptUserToClan(clanID: number, userID: number) {
            console.log(userID);
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/acceptUserToClan`,
                {
                    clan_id: clanID,
                    user_id: userID
                },
                {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                },
            });
            console.log(response);
            if(response.data.sucess) return true;
            return false;
        },
        async declineUserToClan(clanID: number, userID: number) {
            console.log(userID);
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/declineUserToClan`,
                {
                    clan_id: clanID,
                    user_id: userID
                },
                {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                },
            });
            console.log(response);
            if(response.data.sucess) return true;
            return false;
        },
        async removeUserFrom(clanID: number, userID: number) {
            console.log(userID);
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/removeUserFromClan`,
                {
                    clan_id: clanID,
                    user_id: userID
                },
                {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                },
            });
            console.log(response);
            if(response.data.sucess) return true;
            return false;
        },
        async changeUserRole(clanID: number, userID: number, role: string) {
            console.log(userID);
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/changeMemberRole`,
                {
                    clan_id: clanID,
                    user_id: userID,
                    role: role,
                },
                {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                },
            });
            console.log(response);
            if(response.data.sucess) return true;
            return false;
        },
        async leaveClan(clanID: number) {
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/leaveClan`,
                {
                    clan_id: clanID,
                },
                {
                headers: {
                    'x-api-key': userStore.getAccessToken,
                },
            });
            console.log(response);
            if(response.data.sucess) return true;
            return false;
        }
    },
})