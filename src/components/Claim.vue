<template>
    <div class="claim">
        <h1 class="claim__header">Spacer</h1>
        <p class="claim__describe">
            Begin your journey through our amazing universe and discover places you never seen.
        </p>
    </div>
</template>

<script>
export default {
  name: 'Claim',
};
</script>

<style lang="scss" scoped>
    .claim {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        &__header {
            font-size: 36px;
            font-weight: 600;
            margin: 0;
            margin-bottom: 36px;
            letter-spacing: 1px;

            @media (min-width: 768px) {
                font-size: 48px;
            }

            @media (min-width: 1024px) {
                font-size: 64px;
                line-height: 64px;
            }
        }

        &__describe {
            margin: 0;
            margin-bottom: 16px;
            font-size: 12px;
            font-weight: 400;
            max-width: 420px;
            letter-spacing: 1px;

            @media (min-width: 768px) {
                font-size: 14px;
            }

            @media (min-width: 1024px) {
                font-size: 16px;
                line-height: 32px;
            }
        }
    }
</style>
