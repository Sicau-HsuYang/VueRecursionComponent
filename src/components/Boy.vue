<template>
  <div class="component">
    <div>Hello Boy</div>
    {{name}}
    <h1>
      <b>{{msg}}</b>
    </h1>
    <h2>Nums:{{nums}}, Level: {{level}}</h2>
  </div>
</template>

<script lang="ts">
import BaseComponent from '@/components/Base/BaseComponent';
import { Component } from 'vue-property-decorator';
@Component({
  name: 'Boy',
})
export default class Boy extends BaseComponent {
  msg: string = 'Hello Beautiful Girl!';
}
</script>

