<template>
	<div id="app">
		<header>
			<h1>Stechus Kaktus – Romanizer</h1>
			<a
				href="https://en.wikipedia.org/wiki/Roman_numerals"
				title="Read more on Wikipedia"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconWikipedia />
			</a>
		</header>

		<main>
			<router-view/>
		</main>

		<footer>
			<a
				href="https://github.com/Schascha/stechus-kaktus"
				title="View on GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconGitHub />
			</a>
		</footer>
	</div>
</template>

<script>
	import IconGitHub from '@/assets/icons/github.svg?inline';
	import IconWikipedia from '@/assets/icons/wikipedia.svg?inline';

	export default {
		name: 'App',
		components: {
			IconGitHub,
			IconWikipedia
		}
	}
</script>

<style lang="scss">
	@import 'styles';
</style>
