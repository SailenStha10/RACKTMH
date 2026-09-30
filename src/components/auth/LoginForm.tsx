"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { Loader2, ShieldCheck } from "lucide-react"

import { loginSchema } from "@/lib/validations/auth"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import type { z } from "zod"

type LoginValues = z.infer<typeof loginSchema>

function LoginForm({ callbackUrl }: { callbackUrl?: string }) {
  const router = useRouter()
  const [formError, setFormError] = React.useState<string | null>(null)

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  async function onSubmit(values: LoginValues) {
    setFormError(null)

    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    })

    if (!result || result.error) {
      setFormError(
        result?.code === "rate-limited"
          ? "Too many attempts. Please wait a few minutes and try again."
          : "Invalid email or password."
      )
      return
    }

    router.push(callbackUrl || "/admin/dashboard")
    router.refresh()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-16">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center gap-2 text-center">
          <span className="flex size-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <CardTitle>{siteConfig.shortName} Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
              noValidate
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="username"
                        disabled={form.formState.isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        autoComplete="current-password"
                        disabled={form.formState.isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {formError && (
                <p role="alert" className="text-sm text-destructive">
                  {formError}
                </p>
              )}

              <Button
                type="submit"
                className="mt-2 w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                )}
                Sign in
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export { LoginForm }
