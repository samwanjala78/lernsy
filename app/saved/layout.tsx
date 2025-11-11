export default function SavedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col w-full gap-8">            
            {children}
        </div>
    )
}
