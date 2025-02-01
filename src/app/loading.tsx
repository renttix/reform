export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-reform-primary border-t-transparent"></div>
        <p className="mt-4 text-lg text-reform-secondary">Loading content...</p>
      </div>
    </div>
  )
}
