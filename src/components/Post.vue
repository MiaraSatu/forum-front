<template>
    <div class="post-item">
        <div class="head">
            <div class="poster">
                <img src="@/assets/avataaars.png" alt="profile picture" class="profil-pic-sm">
                <span>
                    {{ post.postedBy.fullName }}
                </span>
            </div>
            <div class="title">
                {{ post.title }}
            </div>
            <div>
                {{ createdAt }}
            </div>
        </div>
        <div class="content">
            {{ post.content }}
        </div>
        <div class="foot">

        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPost',
    props: ['post'],
    computed: {
        createdAt() {
            let date = new Date(this.post.createdAt.timestamp * 1000)
            return date
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
            border-bottom: 1px solid rgb(165, 165, 165);
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
    }
    .content {
        padding: 0.7rem 0;
    }
    .foot {

    }
}
</style>