import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold">Portfolio</h1>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="#projects" class="text-gray-700 hover:text-gray-900 transition">Projects</a>
            <a href="#skills" class="text-gray-700 hover:text-gray-900 transition">Skills</a>
            <a href="#contact" class="text-gray-700 hover:text-gray-900 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24 mt-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Software Engineer</h2>
        <p class="text-xl mb-8">Go | Rust | React | AWS | IaC</p>
        <div class="flex justify-center space-x-4">
          <a href="https://github.com/toof-jp" target="_blank" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">GitHub</a>
          <a href="#contact" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-gray-700 mb-6 leading-relaxed">
            バックエンドからフロントエンド、インフラまで幅広い技術領域をカバーするフルスタックエンジニアです。
          </p>
          <p class="text-gray-700 mb-6 leading-relaxed">
            特にGo言語とRustを用いた高性能なバックエンド開発、AWSとTerraformによるInfrastructure as Code（IaC）を得意としています。
          </p>
          <p class="text-gray-700 leading-relaxed">
            新しい技術への挑戦を楽しみ、WebAssemblyなどの最新技術も積極的に学習・活用しています。
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <!-- Main Projects -->
        <div class="space-y-8 mb-12">
          <!-- Shisha Log -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div class="p-8 md:w-2/3">
                <h3 class="text-2xl font-bold mb-3">Shisha Log - シーシャ記録Webアプリケーション</h3>
                <p class="text-gray-600 mb-4">
                  シーシャで利用したフレーバーを手軽に記録・管理できるWebアプリケーション。
                  ユーザーは自身のシーシャ体験を記録し、後から見返すことでより良いシーシャ体験の再現に役立てることができます。
                </p>
                <div class="mb-4">
                  <h4 class="font-semibold mb-2">使用技術:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Go (Echo v4)</span>
                    <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">AWS Lightsail</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Terraform</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Docker</span>
                    <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Supabase</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">S3/CloudFront</span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold mb-2">PRポイント:</h4>
                  <p class="text-gray-600 text-sm">
                    Go言語によるAPIサーバーの構築に加え、AWSの各種サービスとTerraformを組み合わせ、
                    インフラをコードとして管理（IaC）する体制を整えました。再現性が高く、保守性に優れたインフラを構築。
                  </p>
                </div>
                <div class="flex space-x-4">
                  <a href="https://shisha.toof.jp" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                    </svg>
                    Visit Site
                  </a>
                  <a href="https://github.com/toof-jp/shisha-log" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- BBS Search -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div class="p-8 md:w-2/3">
                <h3 class="text-2xl font-bold mb-3">ニコニココミュニティ掲示板 全文検索アプリケーション</h3>
                <p class="text-gray-600 mb-4">
                  ニコニコ動画のコミュニティ掲示板に投稿された内容を、キーワードで高速に全文検索できるWebアプリケーション。
                </p>
                <div class="mb-4">
                  <h4 class="font-semibold mb-2">使用技術:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Rust (axum, SQLx)</span>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Vite</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Cloudflare Pages</span>
                    <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold mb-2">PRポイント:</h4>
                  <p class="text-gray-600 text-sm">
                    パフォーマンスを重視し、バックエンドにはRustを採用。フロントエンドはReactによるSPAとして構築し、
                    Cloudflare Pagesでホスティングすることで、高速なレスポンスと高いスケーラビリティを実現。
                  </p>
                </div>
                <div class="flex space-x-4">
                  <a href="https://github.com/toof-jp/bbs-search-frontend" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Frontend
                  </a>
                  <a href="https://github.com/toof-jp/bbs-search-backend" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Backend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Projects -->
        <h3 class="text-2xl font-bold mb-6">Rustによる多様なツール・アプリケーション開発</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Discord Bot 1 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h4 class="text-xl font-semibold mb-2">掲示板レス取得Discord Bot</h4>
            <p class="text-gray-600 mb-3 text-sm">
              指定した範囲のニコニコのコミュニティ掲示板のレスを取得するDiscord Bot
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Rust</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Discord API</span>
            </div>
            <a href="https://github.com/toof-jp/bbs-fetch-post-discord-bot" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm">
              View on GitHub →
            </a>
          </div>

          <!-- Discord Bot 2 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h4 class="text-xl font-semibold mb-2">ニコニコ掲示板 Discord投稿Bot</h4>
            <p class="text-gray-600 mb-3 text-sm">
              Discordのメッセージをニコニコのコミュニティ掲示板に投稿するBot
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Rust</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Discord API</span>
            </div>
            <a href="https://github.com/toof-jp/bbs-discord-bot" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm">
              View on GitHub →
            </a>
          </div>

          <!-- Comment Viewer -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h4 class="text-xl font-semibold mb-2">ニコニコ生放送コメントビュワー</h4>
            <p class="text-gray-600 mb-3 text-sm">
              Protocol Bufferを利用してリアルタイムにコメントを取得・表示するクライアントアプリケーション
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Rust</span>
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Protocol Buffer</span>
            </div>
            <a href="https://github.com/toof-jp/ndgr-client" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm">
              View on GitHub →
            </a>
          </div>

          <!-- Diary Template Generator -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h4 class="text-xl font-semibold mb-2">Markdown日記テンプレートジェネレーター</h4>
            <p class="text-gray-600 mb-3 text-sm">
              RustをWebAssemblyにコンパイルし、Reactから利用するWebアプリケーション。
              Webフロントエンドでネイティブに近いパフォーマンスを実現。
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Rust</span>
              <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">WebAssembly</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
            </div>
            <div class="flex space-x-3">
              <a href="https://github.com/toof-jp/diary-template-generator" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm">
                Rust →
              </a>
              <a href="https://github.com/toof-jp/diary-template-generator-frontend" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm">
                Frontend →
              </a>
            </div>
          </div>
        </div>

        <!-- More Projects Link -->
        <div class="text-center mt-8">
          <a href="https://github.com/toof-jp?tab=repositories" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
            <span>その他の制作物はGitHubで</span>
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <!-- Skill Categories -->
        <div class="space-y-8 max-w-4xl mx-auto">
          <!-- Backend -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Backend</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-blue-600 mb-1">Go</div>
                <div class="text-sm text-gray-600">Echo v4</div>
              </div>
              <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-orange-600 mb-1">Rust</div>
                <div class="text-sm text-gray-600">axum, SQLx</div>
              </div>
              <div class="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-green-600 mb-1">PostgreSQL</div>
                <div class="text-sm text-gray-600">Database</div>
              </div>
              <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-purple-600 mb-1">Supabase</div>
                <div class="text-sm text-gray-600">BaaS</div>
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Frontend</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-blue-600 mb-1">React</div>
                <div class="text-sm text-gray-600">SPA</div>
              </div>
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-yellow-600 mb-1">WebAssembly</div>
                <div class="text-sm text-gray-600">WASM</div>
              </div>
              <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-purple-600 mb-1">Vite</div>
                <div class="text-sm text-gray-600">Build Tool</div>
              </div>
              <div class="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-green-600 mb-1">Tailwind CSS</div>
                <div class="text-sm text-gray-600">Utility-first CSS</div>
              </div>
            </div>
          </div>

          <!-- Infrastructure -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Infrastructure & DevOps</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-orange-600 mb-1">AWS</div>
                <div class="text-sm text-gray-600">Lightsail, S3, CF</div>
              </div>
              <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-purple-600 mb-1">Terraform</div>
                <div class="text-sm text-gray-600">IaC</div>
              </div>
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-blue-600 mb-1">Docker</div>
                <div class="text-sm text-gray-600">Container</div>
              </div>
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-yellow-600 mb-1">Cloudflare Pages</div>
                <div class="text-sm text-gray-600">Edge Hosting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Contact</h2>
        <div class="max-w-md mx-auto text-center">
          <p class="text-gray-600 mb-8">お仕事のご依頼・ご相談はお気軽にご連絡ください</p>
          <div class="space-y-6">
            <a href="https://github.com/toof-jp" target="_blank" class="flex items-center justify-center space-x-3 text-gray-700 hover:text-gray-900 transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="font-medium">GitHub: toof-jp</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 toof-jp. All rights reserved.</p>
      </div>
    </footer>
  </div>
`

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80; // Navigation bar height
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});