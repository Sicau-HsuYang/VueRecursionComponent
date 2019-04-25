<template>
  <div class="component">
    <div>Hello Conan</div>
    <h2>Nums:{{nums}}, Level: {{level}}</h2>
  </div>
</template>

<script lang="ts">
import BaseComponent from '@/components/Base/BaseComponent';
import { Component } from 'vue-property-decorator';
@Component({
  name: 'Conan',
})
export default class Conan extends BaseComponent {}
</script>

