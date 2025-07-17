import React from 'react'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Newsletter = () => {
  return (
     <Card className="p-6 mb-6 bg-gradient-to-br from-blue-50 to-purple-50  mt-6">
            <h4 className="font-bold mb-2">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest articles delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </Card>
  )
}

export default Newsletter