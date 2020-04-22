import Axios from "axios";

export default {
    getBoardPosts(id: number, size = 9999, page = 0) {
        return Axios.get(`/api/v1/board/${id}/posts?size=${size}&page=${page}`);
    },
    getPost(boardId: number, postId: number) {
        return Axios.get(`/api/v1/board/${boardId}/posts/${postId}`);
    },
    getFaq() {
        return Axios.get('/faq.json');
    },
    getTime() {
        return Axios.get<{ time: number }>('/time');
    }
};