<script>
	let nAgt = window.navigator.userAgent;
	let os = "-";
	var clientStrings = [
		{s:'windows', r:/(Windows 10.0|Windows NT 10.0)/},
		{s:'windows', r:/(Windows 8.1|Windows NT 6.3)/},
		{s:'windows', r:/(Windows 8|Windows NT 6.2)/},
		{s:'windows', r:/(Windows 7|Windows NT 6.1)/},
		{s:'windows', r:/Windows NT 6.0/},
		{s:'windows', r:/Windows NT 5.2/},
		{s:'windows', r:/(Windows NT 5.1|Windows XP)/},
		{s:'windows', r:/(Windows NT 5.0|Windows 2000)/},
		{s:'windows', r:/(Win 9x 4.90|Windows ME)/},
		{s:'windows', r:/(Windows 98|Win98)/},
		{s:'windows', r:/(Windows 95|Win95|Windows_95)/},
		{s:'windows', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
		{s:'windows', r:/Windows CE/},
		{s:'windows', r:/Win16/},
		{s:'android', r:/Android/},
		{s:'openbsd', r:/OpenBSD/},
		{s:'sunos', r:/SunOS/},
		{s:'chromeos', r:/CrOS/},
		{s:'linux', r:/(Linux|X11(?!.*CrOS))/},
		{s:'ios', r:/(iPhone|iPad|iPod)/},
		{s:'macos', r:/Mac OS X/},
		{s:'macos', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
		{s:'qnx', r:/QNX/},
		{s:'unix', r:/UNIX/},
		{s:'beos', r:/BeOS/},
		{s:'ox/2', r:/OS\/2/},
		{s:'searchbot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
	];
	for (let id in clientStrings) {
		let cs = clientStrings[id];
		if (cs.r.test(nAgt)) {
			os = cs.s;
			break;
		}
	}

	let other_binary = "Other Binaries";
</script>

<div class="navbar bg-neutral">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">CutCode</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
		<li><a href="https://cutcode.readthedocs.org/en/stable">Documentation</a></li>
		<li><a href="#download">Download</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
</div>
<br />
<div class="flex flex-col items-center">
	<div class="p-8 bg-neutral rounded-box">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60" class="max-w-sm rounded-lg shadow-2xl" alt="" />
			<div>
			<h1 class="text-5xl font-bold">v4 Just Released!</h1>
			<p class="py-6">CutCode 4 is now out with Feature #1, Feature #2, and much more small features! By the way these images are placeholders replace them with actual ones!</p>
			<button class="btn btn-primary normal-case">Download Now</button>
			</div>
		</div>
	</div>
</div>
<div class="divider px-28"></div>
<div class="text-5xl font-bold px-28 flex flex-col items-center">
	<div class="text-primary">
		CutCode - Boost Your Productivity
	</div>
	&nbsp;
	<div class="font-normal text-lg justify-between flex">
		<div class="w-1/2">CutCode is an open source tool made for developers to boost their productivity and save time by helping them save essential code as code snippets in safe place. These code snippets can be searched and accessed at anytime. It is a very helpful tool as you no longer need to remember your solutions and where you originally found them.</div>
		<div><img src="https://api.lorem.space/image/movie?w=300&h=150" class="max-w-sm rounded-box" alt="" /></div>
	</div>
	<div class="divider px-14"></div>
	<div class="">
		<h1 class="text-primary">Features</h1>
	</div>
	&nbsp;
	<div>
		<p class="text-center text-lg font-normal">Get an overview of the features of CutCode here! @Abdesol add more data here. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Commodi a iusto fugit quaerat optio nostrum corrupti est possimus maiores voluptas, ipsam architecto!</p>
	</div>
	&nbsp;
	<div class="flex flex-row items-center">
		<div class="flex flex-col items-center">
			<img class="mask mask-circle" src="https://api.lorem.space/image/book?w=160&h=160" alt="" />
			<h4 class="text-2xl">Powerful Syntax Highlighting</h4>
			<p class="text-lg font-normal text-center">With CutCode's powerful syntax highlighting, never fail to recognize the language of a snippet. @Abdesol gimme more data please.</p>
		</div>
		<div>&nbsp;&nbsp;&nbsp;</div>
		<div class="flex flex-col items-center">
			<img class="mask mask-circle" src="https://api.lorem.space/image/book?w=160&h=160" alt="" />
			<h4 class="text-2xl">Cross-Platform Support</h4>
			<p class="text-lg font-normal text-center">CutCode with its latest release is now available on Windows, MacOS(Intel & M1), and Linux!</p>
		</div>
		<div>&nbsp;&nbsp;&nbsp;</div>
		<div class="flex flex-col items-center">
			<img class="mask mask-circle" src="https://api.lorem.space/image/book?w=160&h=160" alt="" />
			<h4 class="text-2xl">Sync Once! Use Anywhere!</h4>
			<p class="text-lg font-normal text-center">CutCode's powerful offline and online sync capabilities allow you to save your snippets once and use them anywhere, anytime without hassle.</p>
		</div>
	</div>
	<div class="divider px-14"></div>
	<div class="">
		<h1 id="about" class="text-primary">About</h1>
	</div>
	&nbsp;
	<div class="text-lg font-normal flex flex-col items-center">
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg>
		<p class="text-center px-32">As a developer, we often search on Google / StackOverFlow for doubts, issues related to our code and our projects, when programming. As a result, we visit a lot of different posts, even different websites to find the right solution to our problem, but many times when we see a proper solution to your problem, we tend to forget where we found it or even the solution. Hence, we decided to create a tool that helps us remember and save our solutions as small snippets, so that we never forget about it and access it whenever we need it." and this one here...</p>
		<span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
		<p class="text-white text-md">CutCode</p>
		<p class="text-gray-300 text-md">Product</p>
	</div>
	<div>&nbsp;&nbsp;</div>
	<div class="grid grid-cols-2 gap-4 text-lg font-normal">
		<div class="card min-w-fit bg-base-100 shadow-xl">
			<div class="card-body">
			  <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg></h2>
			  <p>Nice app, thank you @CutCodeDevs for developing such a nice app.</p>
			  <div class="card-actions justify-end">
				<div class="flex flex-row items-center">
					<div class="avatar">
						<div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						  <img src="https://api.lorem.space/image/face?hash=3174" />
						</div>
					</div>
					&nbsp;&nbsp;&nbsp;
					<a class="bg-base-100 text-white">SoulNinja</a>
				</div>
			  </div>
			</div>
		  </div>
		<div class="card min-w-fit bg-base-100 shadow-xl">
			<div class="card-body">
			  <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg></h2>
			  <p>Nice app, HI, thank you @CutCodeDevs for developing such a nice app.</p>
			  <div class="card-actions justify-end">
				<div class="flex flex-row items-center">
					<div class="avatar">
						<div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						  <img src="https://api.lorem.space/image/face?hash=3174" />
						</div>
					</div>
					&nbsp;&nbsp;&nbsp;
					<a class="bg-base-100 text-white">PyBash</a>
				</div>
			  </div>
			</div>
		  </div>
		<div class="card min-w-fit bg-base-100 shadow-xl">
			<div class="card-body">
			  <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg></h2>
			  <p>The app is nice, overall design looks nice, the syncing also works fine, I don't have any complaints related to the app, changing some colors would be nice.</p>
			  <div class="card-actions justify-end">
				<div class="flex flex-row items-center">
					<div class="avatar">
						<div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						  <img src="https://api.lorem.space/image/face?hash=3174" />
						</div>
					</div>
					&nbsp;&nbsp;&nbsp;
					<a class="bg-base-100 text-white">Abdesol</a>
				</div>
			  </div>
			</div>
		  </div>
		<div class="card min-w-fit bg-base-100 shadow-xl">
			<div class="card-body">
			  <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg></h2>
			  <p>Nice app, thank you @CutCodeDevs for developing such a nice app.</p>
			  <div class="card-actions justify-end">
				<div class="flex flex-row items-center">
					<div class="avatar">
						<div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						  <img src="https://api.lorem.space/image/face?hash=3174" />
						</div>
					</div>
					&nbsp;&nbsp;&nbsp;
					<a class="bg-base-100 text-white">KortaPo</a>
				</div>
			  </div>
			</div>
		  </div>
	</div>
	<div class="divider"></div>
	<div id="download">
		<h1 class="text-primary">Download</h1>
	</div>
	&nbsp;
	<div>
		<p class="text-lg font-normal text-center">Latest Version: v3.0.0   |   Relase Date: 08/01/2022</p>
		{#if os == "windows"}
		<div class="flex flex-col items-center">
			<h3 class="text-xl text-primary text-center font-normal">Operating System: Windows</h3>
			&nbsp;
			<a href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode.v3.0.0.Win.x64.exe" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
		</div>
		{:else if os === "macos"}
		<div class="flex flex-col items-center">
			<h3 class="text-xl text-primary text-center font-normal">Operating System: MacOS</h3>
			&nbsp;
			<a href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode.v3.0.0.Mac.pkg" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
		</div>
		{:else if os === "linux"}
		<div class="flex flex-col items-center">
			<h3 class="text-xl text-primary text-center font-normal">Operating System: Linux</h3>
			&nbsp;
			<a href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode_linux_x64_installer.sh" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
		</div>
		{:else}
		<div class="flex flex-col items-center">
			<h3 class="text-xl text-primary text-center font-normal">Unsupported Operating System!</h3>
			&nbsp;
			<p class="font-normal text-lg">You can search for other binaries below!</p>
		</div>
		{/if}
	</div>
	<div>
		<select bind:value={other_binary} class="select select-primary w-full max-w-xs">
			<option disabled selected>Other Binaries</option>
			{#if os != "windows"}
			<option>Windows</option>
			{/if}
			{#if os != "macos"}
			<option>MacOS</option>
			{/if}
			{#if os != "linux"}
			<option>Linux</option>
			{/if}
		</select>
	</div>
	<div>
		{#if other_binary == "Windows" && other_binary.toLowerCase() != os.toLowerCase()}
		<a href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode.v3.0.0.Win.x64.exe" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download Windows Binary</a>
		{:else if other_binary == "MacOS" && other_binary.toLowerCase() != os.toLowerCase()}
		<a href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode.v3.0.0.Mac.pkg" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download MacOS Binary</a>
		{:else if other_binary == "Linux" && other_binary.toLowerCase() != os.toLowerCase()}
		<a href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode_linux_x64_installer.sh" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download Linux Binary</a>
		{/if}
	</div>
	<div class="divider"></div>
	<div id="contact">
		<h1 class="text-primary">Contact Us</h1>
	</div>
	&nbsp;
	<div>
		<p class="text-lg font-normal text-center px-32">Have a question? Want some changes? Know more about the product? Want to contribute? Please feel free to send us an email or write about it below.</p>
		&nbsp;
		<form class="px-52">
			<div class="grid xl:grid-cols-2 xl:gap-6">
				<div class="mb-6">
					<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
					<input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required>
				</div>
				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
					<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required>
				</div>
			</div>
			<div>
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
				<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your feedback or query..."></textarea>
			</div>
			<button type="submit" class="btn btn-active btn-primary normal-case rounded-full">Send</button>
		</form>	
	</div>
</div>
<br />
<br />
<footer class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="grid-flow-col items-center">
		<div class="flex flex-row items-center text-lg">
			<img src="/favicon.png" width="50" height="50" alt="">
			<p>Copyright © 2022 - All right reserved</p>
		</div>
	</div> 
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
	  <a href="https://twitter.com/abdesol">
		  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
			<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
	  	</svg>
	  </a> 
	  <a href="https://github.com/CutCode-org/CutCode">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24	" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
		</svg>
	</a>
	</div>
</footer>