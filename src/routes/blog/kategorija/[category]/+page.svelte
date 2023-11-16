<script>
	export let data
</script>

<!-- ...Post HTML here -->

{#if data.categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each data.categories as category}
				<li>
					<a href="/blog/category/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
