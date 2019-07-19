<template>
    <div class="swiper-slide">
        <div class="user-id-skill-card radius shadow">
            <div class="user-id-skill-title">{{name}}</div>
            <div class="user-id-skill-content">{{desc}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'desc']
}
</script>

