
const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="h-full">
            <div className="hidden"></div>
            {children}
        </div>
    )
}

export default DashboardLayout;