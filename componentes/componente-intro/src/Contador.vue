<template lang="">
	<div class="contador">
		<span>{{ contador }}</span>
		<button @click="inc">+</button>
		<button @click="dec">-</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			contador: 0
		}
	},
	methods: {
		inc() {
			this.contador++
		},
		dec() {
			this.contador--
		}
	},
};
</script>

<style>
	.contador span {
		border-bottom: 1px solid #ccc;
		height: 30px;
		padding: 5px 25px;
	}

	.contador button {
		height: 30px;
		width: 30px;
		border-radius: 15px;
		background-color: #ff7f50;
		color: #fff;
		margin-left: 10px;
		outline: none;
	}
</style>