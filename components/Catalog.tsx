interface CatalogData { 
  title: string, 
  children: React.ReactNode
};

export function Catalog({ title, children }: CatalogData) {
  return (
    <div className="max-w-5xl mx-auto px-5 m-5">
      <h2 className="font-open-sans inline-block text-3xl font-extrabold text-slate-900 tracking-tight mb-4">{title}</h2>
      <div className="grid grid-cols-4 gap-4"> 
        {children}
      </div>
    </div>
  )
}