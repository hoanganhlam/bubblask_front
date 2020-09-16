<template>
    <span v-if="path" class="icon">
        <svg viewBox="0 0 24 24">
            <path :d="path" :transform="transform"/>
        </svg>
    </span>
</template>

<script>
    import icons from './Icon.json';

    export default {
        name: 'AppIcon',
        props: {
            name: String
        },
        computed: {
            path() {
                if (!this.name) return null;
                return typeof icons[this.name] === "string" ? icons[this.name] : icons[this.name].path;
            },
            transform() {
                return typeof icons[this.name] === "object" ? icons[this.name].transform : undefined;
            }
        },
    };
</script>

<style lang="scss">
    .icon {
        svg {
            width: 1rem;
            height: 1rem;
        }

        &.is-medium {
            svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
</style>
