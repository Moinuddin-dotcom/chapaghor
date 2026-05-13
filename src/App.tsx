import React, { useRef, useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion, useScroll, useTransform } from 'framer-motion'

const imgPaths = {
  logo: "https://ui-avatars.com/api/?name=Chapa+Ghor&background=054c4b&color=fff",
  feature1: "https://picsum.photos/seed/print_f1/800/600",
  feature2: "https://picsum.photos/seed/print_f2/800/600",
  banner1: "https://picsum.photos/seed/print_b1/1200/800",
  banner2: "https://picsum.photos/seed/print_b2/1200/800",
  service: "https://picsum.photos/seed/print_s1/800/800",
  cards: [
    "https://picsum.photos/seed/print_c1/600/800",
    "https://picsum.photos/seed/print_c2/600/800",
    "https://picsum.photos/seed/print_c3/600/800",
    "https://picsum.photos/seed/print_c4/600/800",
    "https://picsum.photos/seed/print_c5/600/800",
    "https://picsum.photos/seed/print_c6/600/800"
  ]
}

const cardTitles = [
  "Business Card Printing",
  "Custom Mugs & Ceramics",
  "Brochures & Flyers",
  "Apparel & T-Shirts",
  "Labels & Stickers",
  "Books & Magazines"
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-primary/30">
      {/* Navbar + Category Menu Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col shadow-md border-b border-white/10 transition-colors duration-500 text-white ${
          scrolled ? 'bg-[#124D59]' : 'bg-[#07131D]'
        }`}
      >
        
        {/* Top Navbar Row */}
        <div className="container flex h-20 items-center justify-between gap-4">
          
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 transition-transform hover:scale-105 shrink-0">
              <img src={imgPaths.logo} alt="ChapaGhor Logo" className="h-12 w-12 rounded-xl object-cover ring-2 ring-white/20" />
              <span className="font-bold text-xl lg:text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">ChapaGhor</span>
            </a>

            {/* Search bar */}
            <div className="relative group hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60 group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="h-10 w-64 xl:w-80 rounded-full bg-white/10 border border-transparent pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            {/* Home, Products, Services Buttons */}
            <nav className="hidden md:flex items-center gap-6 mr-2 lg:mr-4 border-r border-white/20 pr-4 lg:pr-6">
              <a href="/" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Home</a>
              <a href="/products" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Products</a>
              <a href="/services" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Services</a>
            </nav>

            {/* Cart, Login, Quote */}
            <div className="flex items-center gap-4 lg:gap-6 shrink-0">
              <a href="/cart" className="relative flex items-center gap-2 text-white hover:text-emerald-200 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden xl:inline text-sm font-medium">Cart</span>
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                  3
                </span>
              </a>
              <a href="/login" className="flex items-center gap-2 text-white hover:text-emerald-200 transition-colors">
                <User className="h-5 w-5" />
                <span className="hidden xl:inline text-sm font-medium">Login</span>
              </a>
              <a href="/quote" className="hidden lg:flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 border border-white/20">
                REQUEST A QUOTE
              </a>
            </div>
          </div>
        </div>

        {/* Second Row: Categories Navigation Menu */}
        <div className="container flex h-14 items-center justify-center lg:justify-start border-t border-white/10">
          <NavigationMenu>
            <NavigationMenuList className="gap-2 lg:gap-4 flex-wrap">
              {[
                "All Product", 
                "Same Day Delivery", 
                "Apparel", 
                "Photo Gift", 
                "Wedding", 
                "Birthday", 
                "Office"
              ].map((category) => (
                <NavigationMenuItem key={category}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 h-10 px-3 lg:px-4 text-sm font-medium text-white/90 hover:text-white transition-colors data-[state=open]:bg-white/10">
                    {category}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px] md:w-[300px] bg-card text-card-foreground rounded-xl shadow-2xl border border-primary/20">
                      <p className="text-sm text-muted-foreground p-2">Explore {category} categories and items...</p>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="pt-[136px]">
        {/* Banner Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32" style={{ background: 'linear-gradient(135deg, #070b16 0%, #07131d 100%)' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="container relative grid lg:grid-cols-2 gap-12 items-center text-white">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex w-max items-center rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                Next-Gen Printing Platform
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Print Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100">Imagination</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                ChapaGhor is a fully dynamic print order and e-commerce platform. Get custom print quotations, place print orders, and enjoy customized shipping — all under one roof.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="/explore" className="rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold hover:bg-primary/90 transition-colors shadow-xl hover:scale-105">
                  Explore Products
                </a>
                <a href="/how-it-works" className="rounded-full border border-white/20 px-8 py-4 font-bold hover:bg-white/10 transition-all">
                  How it Works
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-video lg:aspect-square max-h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 group"
            >
              <Carousel
                plugins={[autoplayPlugin.current]}
                className="w-full h-full"
                onMouseEnter={autoplayPlugin.current.stop}
                onMouseLeave={autoplayPlugin.current.reset}
              >
                <CarouselContent className="h-full">
                  {[imgPaths.banner1, imgPaths.banner2].map((src, i) => (
                    <CarouselItem key={i} className="h-full basis-full">
                      <div className="relative w-full h-full">
                        <img 
                          src={src} 
                          alt={`Banner ${i + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-24 bg-background relative z-10">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Features</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="px-12 relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 md:-ml-6">
                  {[imgPaths.feature1, imgPaths.feature2].map((src, index) => (
                    <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2">
                      <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card aspect-video transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                        <img 
                          src={src} 
                          alt={`Feature ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent p-6 flex flex-col justify-end opacity-80 group-hover:opacity-100 transition-opacity">
                          <h3 className="text-xl font-bold text-white mb-2">High-Tech Printing</h3>
                          <p className="text-sm text-white/80">Experience top-notch precision with our advanced modern machinery.</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-secondary/80 hover:bg-primary hover:text-white border-0 text-white" />
                <CarouselNext className="hidden md:flex bg-secondary/80 hover:bg-primary hover:text-white border-0 text-white" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
          <div className="absolute -left-40 top-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20 group">
                <img 
                  src={imgPaths.service} 
                  alt="Our Services" 
                  className="w-full h-full object-cover aspect-square md:aspect-auto md:h-[600px] transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay"></div>
              </div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-[#090A0A]">Our Main Goals</h2>
                  <div className="h-1 w-16 bg-primary rounded-full mb-8"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    At ChapaGhor, we strive to bring your imagination to reality. Our primary goal is to provide a seamless, all-in-one platform for custom print orders, real-time quotations, and personalized shipping solutions.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Whether you are an individual looking for a customized gift or a business requiring bulk commercial printing, our state-of-the-art facility and expert team ensure the highest quality output with absolute perfection.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                  <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                      <Search className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Instant Quotes</h4>
                    <p className="text-sm text-muted-foreground">Get transparent pricing instantly based on your custom requirements.</p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Easy Ordering</h4>
                    <p className="text-sm text-muted-foreground">A smooth, fully dynamic checkout and order tracking system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Showcase - Sticky Stacked Cards */}
        <section className="py-32 bg-background relative">
          <div className="container mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Popular Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our top-selling custom printing services. Scroll to see more.</p>
          </div>
          
          <div className="container flex flex-col items-center gap-12 pb-[20vh]">
            {imgPaths.cards.map((src, index) => {
              return (
                <div 
                  key={index}
                  className="sticky top-32 w-full max-w-[80vw] lg:max-w-[1000px] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-card transition-all"
                  style={{
                    zIndex: index + 10,
                    top: `calc(8rem + ${index * 2}rem)`,
                  }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-card to-secondary/30 relative">
                      <div className="absolute top-0 right-0 p-8 text-6xl font-black text-primary/5 select-none pointer-events-none">
                        0{index + 1}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{cardTitles[index]}</h3>
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        Premium quality printing for your {cardTitles[index].toLowerCase()}. Customizable designs, luxury finishes, and bulk discounts available. Enhance your brand with our state-of-the-art solutions.
                      </p>
                      <button className="self-start px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        Customize Now
                      </button>
                    </div>
                    <div className="w-full md:w-1/2 h-64 md:h-[500px]">
                      <img 
                        src={src} 
                        alt={cardTitles[index]} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="bg-[#012622] text-white pt-16 pb-8 border-t-4 border-primary mt-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 mb-2">
              <div className="bg-primary p-2 rounded-lg">
                <img src={imgPaths.logo} alt="ChapaGhor" className="h-8 w-8 object-contain brightness-0 invert" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">ChapaGhor</span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed">
              Your one-stop destination for premium custom printing and e-commerce solutions. High quality, fast delivery, and absolute perfection.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Shop Products</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Our Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Pricing Plans</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Customer Service</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Track Your Order</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Frequently Asked Questions</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Printing Avenue, Design District, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@chapaghor.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3 text-white">Subscribe to our newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Email address" className="bg-white/10 border-0 rounded-l-md px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-primary text-white placeholder:text-white/40" />
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">&copy; 2026 ChapaGhor. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-50 hover:opacity-100 transition-opacity bg-white p-1 rounded" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-50 hover:opacity-100 transition-opacity bg-white p-1 rounded" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="h-6 opacity-50 hover:opacity-100 transition-opacity bg-white p-1 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
