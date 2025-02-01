export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-reform-dark">
      {/* Hero Section Skeleton */}
      <div className="relative h-[400px] w-full bg-reform-gray/10 dark:bg-reform-secondary/10 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="h-12 w-96 bg-white/20 rounded-lg mb-4"></div>
            <div className="h-6 w-80 bg-white/20 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Challenges Section */}
            <div className="mb-12">
              <div className="h-8 w-48 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg mb-6 animate-pulse"></div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-reform-gray/5 dark:bg-reform-secondary/5 p-6 rounded-xl animate-pulse">
                    <div className="h-6 w-48 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg mb-3"></div>
                    <div className="h-4 w-full bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Section */}
            <div className="mb-12">
              <div className="h-8 w-48 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg mb-6 animate-pulse"></div>
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white dark:bg-reform-dark border border-reform-primary/10 dark:border-white/10 p-6 rounded-xl">
                    <div className="h-6 w-48 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg mb-3 animate-pulse"></div>
                    <div className="h-4 w-full bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg mb-4 animate-pulse"></div>
                    <div className="bg-reform-primary/5 dark:bg-reform-light/5 p-4 rounded-lg">
                      <div className="h-4 w-3/4 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-reform-dark border border-reform-primary/10 dark:border-white/10 rounded-xl p-6 mb-8">
              <div className="h-6 w-36 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg mb-4 animate-pulse"></div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-reform-primary/10 dark:border-white/10 last:border-0 pb-4 last:pb-0">
                    <div className="h-4 w-24 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg mb-2 animate-pulse"></div>
                    <div className="h-6 w-32 bg-reform-gray/10 dark:bg-reform-secondary/10 rounded-lg animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
