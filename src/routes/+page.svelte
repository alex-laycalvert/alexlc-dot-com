<script>
	import AboutMe from "../components/AboutMe.svelte";
	import WorkExperience from "../components/WorkExperience.svelte";
	let sections = [
		{
			id: "aboutMe",
			header: "About Me",
			body: AboutMe,
		},
		{
			id: "workExperience",
			header: "Work Experience",
			body: WorkExperience,
		},
	];
</script>

<div class="w-full h-full flex">
	<div class="fixed bottom-0 w-full p-8" />
	<div class="w-full h-full p-4 space-y-8">
		{#each sections as section (section.id)}
			<div id={section.id} class="space-y-2">
				<a class="group flex items-center space-x-2" href="#{section.id}">
					<h2 class="text-4xl">{section.header}</h2>
					<svg
						class="hidden group-hover:block w-6 h-6 text-white bg-slate-600 p-[0.2rem] rounded-md"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="4"
							d="M6 16h36M16 6v36M32 6v36M6 32h36"
						/>
					</svg>
				</a>
				<div class="text-lg"><svelte:component this={section.body} /></div>
			</div>
		{/each}
	</div>
	<div class="hidden lg:block lg:w-1/5" />
</div>
