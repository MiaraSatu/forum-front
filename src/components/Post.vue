<template>
    <div class="post-item">
        <div class="head">
            <div class="poster">
                <img src="@/assets/avataaars.png" alt="profile picture" class="profil-pic-sm">
                <span>
                    {{ post.postedBy.fullName }}
                </span>
            </div>
            <div class="createdAt">
                {{ format(createdAt) }}
            </div>
            <div class="title">
                {{ post.title }}
            </div>
        </div>
        <div class="content">
            {{ post.content }}
        </div>
        <div class="foot">
            <button class="like">
                {{ likeNumber }}
                <font-awesome-icon icon="fa-regular fa-thumbs-up" />
            </button>
            <button class="comment">
                {{ commentNumber }}
                <font-awesome-icon icon="fa-regular fa-comment" />
            </button>
        </div>
    </div>
</template>

<script>
import { format } from 'date-fns'

export default {
    name: 'AppPost',
    props: ['post'],
    computed: {
        createdAt() {
            let date = new Date(this.post.createdAt.timestamp * 1000)
            return date
        },
        likeNumber() {
            return Math.floor(Math.random() * 100) + 20
        },
        commentNumber() {
            return Math.floor(Math.random() * 75) + 20
        }
    },
    methods: {
        format(date) {
            return format(new Date(date), "HH:mm eee dd MMM Y")
        }
    }
}
</script>

<style lang="scss">
.post-item {
    background-color: #ececec;
    border: 1px solid #bfbfbf;
    margin: 1rem 0;
    padding: 1rem 2rem;

    .head {
        .poster {
            display: flex;
            align-items: center;
            padding-bottom: 0.2rem;
        }
        .title {
            text-transform: uppercase;
            margin-top: 0.3rem;
            font-size: 0.8rem;
            color: rgb(68, 68, 68);
        }
        .createdAt{
            font-size: 0.8rem;
            color: #555555;
            border-bottom: 1px solid rgb(165, 165, 165);
        }
    }
    .content {
        padding: 0.7rem 0;
        border-bottom: 1px solid rgb(165, 165, 165);
    }
    .foot {
        margin-top: 1rem;
        & > button {
            padding: 0.2rem 0.5rem;
            border: 1px solid #045dd9;
            border-radius: 2px;
            background-color: #fff;
            color: #045dd9;
            &.like {
                margin-right: 0.5rem;
                &.liked {
                    border: none;
                    background-color: #045dd9;
                    color: #fff;
                }
            }
        }
    }
}
</style>