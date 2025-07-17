/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { API_BASE_URL } from '@/configs/env';

export const http = {
    delete: async (path: string, revalidate?: number, cache?: RequestCache) => {
        return new Promise((resolve, reject) => {
            fetch(API_BASE_URL + path, {
                method: 'DELETE',
                cache: cache || 'no-store',
                next: {
                    revalidate: revalidate || 60
                }
            })
                .then(async (response) => {
                    if (!response.ok) {
                        const res = (await response.json()) as unknown;
                        reject(res);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    get: async (path: string, revalidate?: number, cache?: RequestCache) => {
        return new Promise((resolve, reject) => {
            fetch(API_BASE_URL + path, {
                method: 'GET',
                cache: cache || 'no-store',
                next: {
                    revalidate: revalidate || 60
                }
            })
                .then(async (response) => {
                    if (!response.ok) {
                        const res = (await response.json()) as unknown;
                        reject(res);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    post: (path: string, body: unknown) => {
        return new Promise((resolve, reject) => {
            fetch(API_BASE_URL + path, {
                method: 'POST',
                body: body instanceof FormData ? body : JSON.stringify(body)
            })
                .then(async (response) => {
                    if (!response.ok) {
                        const res = (await response.json()) as unknown;
                        reject(res);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    put: (path: string, body: unknown) => {
        return new Promise((resolve, reject) => {
            fetch(API_BASE_URL + path, {
                method: 'PUT',
                body: body instanceof FormData ? body : JSON.stringify(body)
            })
                .then(async (response) => {
                    if (!response.ok) {
                        const res = (await response.json()) as unknown;
                        reject(res);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};
