import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChatflowLoading() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-muted/30 pt-24 pb-12 md:pt-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-12 w-full max-w-md" />
              <Skeleton className="h-6 w-full max-w-sm" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Skeleton className="h-10 w-36" />
                <Skeleton className="h-10 w-36" />
              </div>
            </div>
            <Skeleton className="aspect-video w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                  <TabsTrigger
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="examples"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Examples
                  </TabsTrigger>
                  <TabsTrigger
                    value="documentation"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Documentation
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="pt-6">
                  <div className="space-y-8">
                    <div>
                      <Skeleton className="h-8 w-64 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>

                    <div>
                      <Skeleton className="h-7 w-40 mb-4" />
                      <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(3)].map((_, i) => (
                          <Card key={i} className="bg-muted/50">
                            <CardHeader className="pb-2">
                              <Skeleton className="h-6 w-32" />
                            </CardHeader>
                            <CardContent>
                              <Skeleton className="h-4 w-full mb-2" />
                              <Skeleton className="h-4 w-3/4" />
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Skeleton className="h-7 w-56 mb-4" />
                      <div className="grid gap-4 mt-4 sm:grid-cols-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="flex flex-col p-4 border rounded-lg">
                            <Skeleton className="h-4 w-32 mb-2" />
                            <Skeleton className="h-4 w-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Testimonials */}
              <div>
                <Skeleton className="h-8 w-64 mb-6" />
                <div className="grid gap-6 md:grid-cols-2">
                  {[...Array(2)].map((_, i) => (
                    <Card key={i} className="bg-muted/50">
                      <CardContent className="pt-6">
                        <Skeleton className="h-4 w-24 mb-4" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4 mb-4" />
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <Skeleton className="h-6 w-24 mb-2" />
                  <Skeleton className="h-4 w-48" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <Skeleton className="h-8 w-32" />
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-4 w-32 mx-auto" />
                </CardContent>
              </Card>

              {/* Related Chatflows */}
              <div>
                <Skeleton className="h-6 w-40 mb-4" />
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center p-3 rounded-lg border">
                      <Skeleton className="h-10 w-10 rounded-full mr-3" />
                      <div className="flex-1 min-w-0">
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                      <Skeleton className="h-5 w-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
