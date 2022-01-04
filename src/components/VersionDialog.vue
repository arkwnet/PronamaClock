<template>
	<div class="dialog">
		<div class="header">プロ生時計 について</div>
		<div class="contents">
			<div class="logo"><img :src="logoImage"></div>
			<div class="version">
				Version {{ version }}<br>
				<small>Based on Ahoxa {{ ahoxaVersion }}</small>
			</div>
			<div class="license">
				<p>
					Copyright (c) 2021,2022 Sora Arakawa<br>
					Licensed under the MIT License
				</p>
				<p>
					Copyright (c) 2022 Pronama LLC
				</p>
				<p>
					<a href="https://arkw.net/products/web/pronama_clock/" target="blank">https://arkw.net/products/web/pronama_clock/</a>
				</p>
			</div>
		</div>
		<div class="button" @click="closeDialog()">閉じる</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	emits: ["closeDialog"],
	data() {
		return {
			logoImage: "assets/logo.svg?version=20220101",
			version: require("../../package.json").version,
			ahoxaVersion: "2.0.1"
		}
	},
	methods: {
		closeDialog: function() {
			this.$emit("closeDialog");
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
</style>