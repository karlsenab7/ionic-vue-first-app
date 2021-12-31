import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1",
                    image:
                        "https://p4.wallpaperbetter.com/wallpaper/1004/301/234/boathouse-house-lake-mountain-lake-wallpaper-preview.jpg",
                    title: "A trip into the mountains",
                    description: "It was a huge mountain !",
                },
                {
                    id: "m2",
                    image:
                        "https://www.wallpaperbetter.com/wallpaper/878/925/294/beautiful-ocean-scenery-1080P-wallpaper-middle-size.jpg",
                    title: "Surfing the sea side",
                    description: "The blue sea was amazing !",
                },
                {
                    id: "m3",
                    image:
                        "https://www.gannett-cdn.com/media/2019/01/30/Phoenix/Phoenix/636844726071264393-ras-06.JPG",
                    title: "Good eating",
                    description: "The food was superb !",
                },
                {
                    id: "m4",
                    image:
                        "https://cdn0-production-images-kly.akamaized.net/Rqk-trYdwvZQUcLsLHyX5yZy_kM=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3808173/original/006470800_1640682820-new-years-day-g3cc28ec8a_1280.jpg",
                    title: "Hapyy New Year",
                    description: "Home Alone Coding :'D",
                },
            ],
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryID) => {
                return state.memories.find((memory) => memory.id === memoryID);
            };
        }
    }
});

export default store;