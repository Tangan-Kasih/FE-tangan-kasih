"use client";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <footer className='bg-[#0B4B3C] text-white'>
      <div className='container mx-auto px-4 py-16 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold max-w-4xl mx-auto mb-8 leading-tight'>
          Looking to help out? There are thousands of fundraisers requests that
          would benefit from a donation of any size!
        </h2>
        <Button className='bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6'>
          Find a request to support!!
        </Button>
      </div>

      <hr className='border-t border-white/10' />

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-6'>
            <div className='text-2xl font-bold'>
              G<span className='inline-block'>⭕</span>LIFE
              <br />
              SPAN
            </div>
            <div className='flex gap-4'>
              <a href='#' className='hover:text-yellow-400'>
                <Facebook className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-yellow-400'>
                <Twitter className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-yellow-400'>
                <Instagram className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-yellow-400'>
                <Linkedin className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-yellow-400'>
                <Youtube className='w-6 h-6' />
              </a>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Connect with us</h3>
              <p className='text-white/80'>Email: info@lifespan.org</p>
              <p className='text-white/80'>Contact No: +1 234 (2525) 236</p>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Donate monthly
                </a>
              </li>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Success stories
                </a>
              </li>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Latest news
                </a>
              </li>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Learn</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  How it works
                </a>
              </li>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Start fundraising
                </a>
              </li>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Browse fundraisers
                </a>
              </li>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href='#' className='text-white/80 hover:text-white'>
                  Term & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>
              Get urgent fund needed projects in your inbox
            </h3>
            <div className='space-y-4'>
              <Input
                type='email'
                placeholder='Email address'
                className='bg-white/10 border-white/10 text-white placeholder:text-white/60'
              />
              <Button className='w-full bg-yellow-400 hover:bg-yellow-500 text-black'>
                Submit
              </Button>
              <p className='text-sm text-white/80'>
                Weve earned the highest possible ratings from Charity Watch,
                Charity Navigator, and Guidestar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            <p className='text-white/80'>
              ©2024 GoLife span.org, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
