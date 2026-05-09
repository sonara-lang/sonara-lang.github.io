export default function Logo({ className = '', size = 'md' }) {
  const heights = { sm: 'h-7', md: 'h-9', lg: 'h-14' }
  const h = heights[size] || heights.md

  return (
    <div className={`flex items-center ${className}`}>
      <img src="/images/logo.png" alt="Sonara" className={`${h} w-auto`} />
    </div>
  )
}
