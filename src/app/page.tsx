"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Heart, Star, Wheat, Users, MessageSquare, MapPin } from 'lucide-react';

const assetMap: { id: string; url: string; alt?: string }[] = [{"id":"hero-image","url":"https://images.pexels.com/photos/4906454/pexels-photo-4906454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Assorted yummy sweets and bakery products places on counter of confectionery shop in daytime"},{"id":"about-image","url":"https://images.pexels.com/photos/1619574/pexels-photo-1619574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Baker working with dough in a commercial bakery kitchen, viewed through a glass window."},{"id":"croissant-product","url":"https://images.pexels.com/photos/6205522/pexels-photo-6205522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Crop anonymous female employee in apron putting tasty pastries with tongs on plate in bakery"},{"id":"sourdough-product","url":"https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Freshly sliced whole grain bread with oats and flour provides a rustic and nutritious appeal."},{"id":"wedding-cake-product","url":"https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant white wedding cake adorned with fresh roses and daisies, perfect for a romantic celebration."},{"id":"macarons-product","url":"https://images.pexels.com/photos/4906454/pexels-photo-4906454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Assorted yummy sweets and bakery products places on counter of confectionery shop in daytime"},{"id":"baker-1","url":"https://images.pexels.com/photos/27917034/pexels-photo-27917034.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful chef in uniform prepares a baking recipe in a modern kitchen, showcasing fresh ingredients."},{"id":"baker-2","url":"https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A baker in an indoor kitchen kneading dough for bread preparation, showcasing traditional baking techniques."},{"id":"testimonial-1","url":"https://images.pexels.com/photos/5025646/pexels-photo-5025646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A courier signs for a package delivery outdoors with a clipboard and a happy recipient."},{"id":"testimonial-2","url":"https://images.pexels.com/photos/3985083/pexels-photo-3985083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A father and daughter share a bonding moment choosing donuts at an indoor supermarket."},{"id":"testimonial-3","url":"https://images.pexels.com/photos/8122027/pexels-photo-8122027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A young woman in a hijab enjoying a croissant and drink outdoors in a spring setting."},{"id":"testimonial-4","url":"https://images.pexels.com/photos/4199288/pexels-photo-4199288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Couple selecting bread in a modern supermarket while grocery shopping together."},{"id":"testimonial-5","url":"https://images.pexels.com/photos/7552330/pexels-photo-7552330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant lemon cheesecake on a stand surrounded by natural flowers. Perfect for celebrations or culinary projects."},{"id":"contact-image","url":"https://images.pexels.com/photos/3036908/pexels-photo-3036908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman gazes intently at a variety of delicious pastries through a bakery window."}];

export default function Page() {
  // Asset resolution function
  const resolveAsset = (assetRef: string) => {
    if (!assetRef.startsWith('asset://')) return { url: assetRef, alt: 'Decorative image' };
    const id = assetRef.replace('asset://', '');
    const asset = assetMap.find(a => a.id === id);
    return {
      url: asset?.url ?? '/public/images/placeholder.webp',
      alt: asset?.alt ?? 'Decorative image'
    };
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sweet Delights Bakery"
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Freshly Baked Every Morning"
          description="Discover our artisanal breads, pastries, and custom cakes made with love and the finest ingredients"
          tag="Family Owned Since 1985"
          tagIcon={Heart}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Order Online", href: "contact" }
          ]}
          imageSrc={resolveAsset("asset://hero-image").url}
          imageAlt={resolveAsset("asset://hero-image").alt}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For nearly four decades, Sweet Delights Bakery has been the heart of our community, serving fresh-baked goods made from time-honored recipes passed down through generations.",
            "Every morning before dawn, our skilled bakers begin crafting breads, pastries, and desserts using only the finest ingredients, ensuring each bite delivers the warmth and comfort you deserve."
          ]}
          buttons={[{ text: "Learn More", href: "about" }]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="What Makes Us Special"
          description="From our traditional baking methods to our commitment to quality, discover what sets us apart"
          tag="Our Promise"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Artisan Techniques",
              description: "Time-honored baking methods passed down through generations of master bakers",
              imageSrc: resolveAsset("asset://about-image").url,
              imageAlt: resolveAsset("asset://about-image").alt
            },
            {
              id: "02",
              title: "Premium Ingredients",
              description: "Locally sourced flour, organic butter, and fresh seasonal ingredients in every recipe",
              imageSrc: resolveAsset("asset://croissant-product").url,
              imageAlt: resolveAsset("asset://croissant-product").alt
            },
            {
              id: "03",
              title: "Custom Creations",
              description: "Bespoke cakes and specialty items crafted to make your celebrations unforgettable",
              imageSrc: resolveAsset("asset://wedding-cake-product").url,
              imageAlt: resolveAsset("asset://wedding-cake-product").alt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Signature Products"
          description="Handcrafted daily with love, featuring our most popular bakery items"
          tag="Fresh Daily"
          tagIcon={Wheat}
          products={[
            {
              id: "1",
              brand: "Sweet Delights",
              name: "Butter Croissants",
              price: "$3.50",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: resolveAsset("asset://croissant-product").url,
              imageAlt: resolveAsset("asset://croissant-product").alt
            },
            {
              id: "2",
              brand: "Sweet Delights",
              name: "Artisan Sourdough",
              price: "$8.95",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: resolveAsset("asset://sourdough-product").url,
              imageAlt: resolveAsset("asset://sourdough-product").alt
            },
            {
              id: "3",
              brand: "Sweet Delights",
              name: "Wedding Cakes",
              price: "$125.00",
              rating: 5,
              reviewCount: "890",
              imageSrc: resolveAsset("asset://wedding-cake-product").url,
              imageAlt: resolveAsset("asset://wedding-cake-product").alt
            },
            {
              id: "4",
              brand: "Sweet Delights",
              name: "French Macarons",
              price: "$2.25",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: resolveAsset("asset://macarons-product").url,
              imageAlt: resolveAsset("asset://macarons-product").alt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Bakers"
          description="The talented artisans who bring passion and expertise to every creation"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Head Baker & Owner",
              imageSrc: resolveAsset("asset://baker-1").url,
              imageAlt: resolveAsset("asset://baker-1").alt
            },
            {
              id: "2",
              name: "James Thompson",
              role: "Pastry Chef",
              imageSrc: resolveAsset("asset://baker-2").url,
              imageAlt: resolveAsset("asset://baker-2").alt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real reviews from our valued community members"
          tag="Customer Love"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Resident",
              testimonial: "The croissants here are absolutely divine! They taste just like the ones I had in Paris. Maria and her team truly understand the art of baking.",
              imageSrc: resolveAsset("asset://testimonial-1").url,
              imageAlt: resolveAsset("asset://testimonial-1").alt
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Event Planner",
              testimonial: "Sweet Delights created the most stunning wedding cake for our clients. The attention to detail and flavor combinations were extraordinary.",
              imageSrc: resolveAsset("asset://testimonial-2").url,
              imageAlt: resolveAsset("asset://testimonial-2").alt
            },
            {
              id: "3",
              name: "Emma Williams",
              role: "Coffee Shop Owner",
              testimonial: "We've been sourcing our daily bread from Sweet Delights for three years. The consistency and quality are unmatched in the area.",
              imageSrc: resolveAsset("asset://testimonial-3").url,
              imageAlt: resolveAsset("asset://testimonial-3").alt
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "Family Customer",
              testimonial: "This bakery has been part of our family traditions for years. From birthday cakes to Sunday morning pastries, they never disappoint.",
              imageSrc: resolveAsset("asset://testimonial-4").url,
              imageAlt: resolveAsset("asset://testimonial-4").alt
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Corporate Client",
              testimonial: "Sweet Delights caters all our office events. Their professionalism and delicious offerings make every meeting special.",
              imageSrc: resolveAsset("asset://testimonial-5").url,
              imageAlt: resolveAsset("asset://testimonial-5").alt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          tagIcon={MapPin}
          title="Visit Our Bakery Today"
          description="Stop by for fresh-baked goods, custom orders, or just to say hello. We'd love to serve you!"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="Join our newsletter for daily specials and baking tips. Unsubscribe anytime."
          imageSrc={resolveAsset("asset://contact-image").url}
          imageAlt={resolveAsset("asset://contact-image").alt}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Bakery",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Meet the Team", href: "team" }
              ]
            },
            {
              title: "Products",
              items: [
                { label: "Daily Breads", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Custom Cakes", href: "products" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Catering", href: "contact" },
                { label: "Special Orders", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Order Online", href: "contact" },
                { label: "Newsletter", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Sweet Delights Bakery"
        />
      </div>
    </ThemeProvider>
  );
}