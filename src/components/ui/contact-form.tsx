'use client'
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Textarea } from './textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { Button } from './button'
import { BottomGradient } from './bottom-gradient'
import emailjs from 'emailjs-com'
import { useToast } from './use-toast'
import { Loader2 } from 'lucide-react'

const phoneRegex = /^\(?[1-9]{2}\)? ?9?[6-9][0-9]{3}-?[0-9]{4}$/

const formSchema = z.object({
  customerName: z.string().min(1).max(30),
  customerEmail: z.string().email("Por favor insira um email valido"),
  customerPhone: z.string().regex(phoneRegex, {
    message: "Número de celular inválido. O formato deve ser (99) 99999-9999 ou similar.",
  }),
  customerRequest: z.string().min(1, { message: "Por favor escolha uma opção" }),
  message: z.string().min(3, { message: "Por favor, descreva o que você precisa" }).max(500),
})

export const ContactForm = () => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      customerRequest: "",
      message: "",
    }
  })

  const { handleSubmit, formState: { isValid }, reset } = form

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      values,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    ).then(
      () => {
        setIsLoading(false)
        reset()
        toast({
          title: "Obrigado!",
          description: (
            <p className="mt-2 w-[340px] rounded-md p-4">
              Sua mensagem foi enviada com sucesso!
              Entrarei em contato em breve.
            </p>
          ),
        })
      },
      (error) => {
        toast({
          title: "Ocorreu um erro!",
          description: (
            <p className="mt-2 w-[340px] rounded-md p-4 text-white">
              Ocorreu um erro ao enviar sua mensagem.
            </p>
          ),
        })
        console.log('Erro:', error.text);
      }
    );
  }

  return (
    <div className='flex flex-col max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 
      md:p-8 border border-white/[0.2] bg-black gap-4'
      id='contact'
    >
      <h3 className='font-bold text-white text-2xl'>Entre em contato comigo</h3>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>Seu nome</FormLabel>
                <FormControl>
                  <Input className='shadow-none' placeholder="Alex Ferguson" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customerEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>Email</FormLabel>
                <FormControl>
                  <Input className='shadow-none' placeholder="nome@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customerPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>Whatsapp</FormLabel>
                <FormControl>
                  <Input className='shadow-none' placeholder="(99) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customerRequest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>Serviço que precisa</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className='shadow-none'>
                      <SelectValue placeholder="Escolha um serviço" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sites">Criação de sites</SelectItem>
                    <SelectItem value="apps">Criação de aplicativos</SelectItem>
                    <SelectItem value="landing_pages">Criação de landing pages</SelectItem>
                    <SelectItem value="systems">Criação de sistemas</SelectItem>
                    <SelectItem value="saas">Criação de SaaS</SelectItem>
                    <SelectItem value="blogs">Criação de blogs</SelectItem>
                    <SelectItem value="others">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>Mensagem</FormLabel>
                <FormControl>
                  <Textarea className='flex h-10 w-full border-none bg-brand-martinique text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                    focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-brand-wisteria
                    disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                    group-hover/input:shadow-none transition duration-400 resize-none'
                    placeholder="Detalhe um pouco sobre o que precisa." {...field}
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="bg-gradient-to-br relative group/btn flex item-center from-black to-brand-martinique w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40,0px_-1px_0px_0px_#ffffff40]"
            type="submit"
            disabled={!isValid || isLoading}
          >
            {isLoading ? <Loader2 className="size-4 animate-spin" /> : 'Enviar'}

            <BottomGradient />
          </Button>
        </form>
      </Form>

    </div>
  )
}
