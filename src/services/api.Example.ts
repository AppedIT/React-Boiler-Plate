import { AxiosInstance } from "axios";
import apiRequest, { setupAxiosInstance } from "./api.shared";
import { Law, Tag } from "../types/law";
import ConfigEnv from "../config";

const instance: AxiosInstance = setupAxiosInstance(
    ConfigEnv().API_BASEURL
);

const ExampleApi = {
    // auth: {
    //     authenticate: (user: Credentials) =>
    //     apiRequest<any>({
    //         instance,
    //         method: 'POST',
    //         endpoint: '/api/Auth/authenticate',
    //         body: user,
    //     }),
    // },
    comment: {
        saveComment: (comment: Comment) =>
        apiRequest<any>({
            instance,
            method: 'POST',
            endpoint: '/api/Comment',
            body: comment,
        }),
    },
    laws: {
        getLaws: () =>
        apiRequest<any>({
            instance,
            method: 'GET',
            endpoint: '/api/Law',
        }),
        saveNewLaw: (law: Law) =>
        apiRequest<any>({
            instance,
            method: 'POST',
            endpoint: '/api/Law',
            body: law,
        }),
        getTags: () =>
            apiRequest<any>({
                instance,
                method: 'GET',
                endpoint: '/api/Law/Tag',
        }),
        saveNewTag: (tag: Tag) => 
            apiRequest<any>({
                instance,
                method: 'GET',
                endpoint: '/api/Law/Tag',
                body: tag,
        }),
        getBooks: () => 
            apiRequest<any>({
                instance,
                method: 'GET',
                endpoint: '/api/Law/Book',
        }),
        deleteTag: (tagId: number) => 
            apiRequest<any>({
                instance,
                method: 'DELETE',
                endpoint: `/api/Law/Tag/${tagId}`,
        }),
    },
    users: {
        getUsers: () => 
            apiRequest<any>({
                instance,
                method: 'GET',
                endpoint: '/api/User',
        }),
        saveNewUsers: (user: any) => 
            apiRequest<any>({
                instance,
                method: 'POST',
                endpoint: '/api/User',
                body: user,
        }),
        getRoles: () => 
            apiRequest<any>({
                instance,
                method: 'GET',
                endpoint: '/api/User/Role',
        }),
        saveNewRoles: (role: any) => 
            apiRequest<any>({
                instance,
                method: 'POST',
                endpoint: '/api/User/Role',
                body: role,
        }),
    }
}

export default ExampleApi;