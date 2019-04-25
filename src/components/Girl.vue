<template>
  <div class="component">
    <div>Hello Gril</div>
    <h2>Nums:{{nums}}, Level: {{level}}</h2>
  </div>
</template>

<script lang="ts">
import BaseComponent from '@/components/Base/BaseComponent';
import { Component } from 'vue-property-decorator';
@Component({
  name: 'Girl',
})
export default class Girl extends BaseComponent {}
</script>

