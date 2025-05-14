import { Loader2 } from "lucide-react"

export default function OnboardingLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
        <h2 className="text-xl font-semibold">Loading...</h2>
        <p className="text-muted-foreground">Please wait while we prepare the onboarding form.</p>
      </div>
    </div>
  )
}
