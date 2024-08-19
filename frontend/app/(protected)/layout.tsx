import { Navbar } from "@/components/navbar/navbar";
import { getCurrentUser } from "@/lib/get-current-user";
import { ModalProvider } from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import { Sidebar } from "@/components/sidebar/sidebar";

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
            <body className="h-screen w-full transition-colors duration-300">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                >
                    <ModalProvider/>
                    <Toaster />
                    <div className="h-full w-full flex">
                        <div className="h-full w-[15vw]">
                            <div className="fixed h-full w-[15vw]">
                                <Sidebar currentUser={currentUser}/>
                            </div>
                        </div>
                        <div className="h-screen w-[85vw] py-6 px-4">
                            {children}
                        </div>
                    </div>
                    
                    {/* <Navbar user={currentUser}/> */}
                </ThemeProvider>
            </body>
        </html>
    );
}