<template>
  <div class="text-block" v-html="content"></div>
</template>

<script>
export default {
  name: 'TextBlockComponent',
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.text-block {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.text-block :deep(h1),
.text-block :deep(h2),
.text-block :deep(h3),
.text-block :deep(h4),
.text-block :deep(h5),
.text-block :deep(h6) {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.text-block :deep(p) {
  margin-bottom: 1rem;
}

.text-block :deep(ul),
.text-block :deep(ol) {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.text-block :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
