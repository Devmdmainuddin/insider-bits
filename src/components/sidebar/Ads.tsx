import React from 'react'
import { Card } from '../ui/card'

const Ads = () => {
  return (
   <Card className="p-6 mt-3">
        <div className="text-center">
          <h4 className="font-bold mb-2">Adleo Digital Agency &</h4>
          <h4 className="font-bold mb-4">Creative Portfolio Website</h4>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold">28+</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-600">Homepage</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
  )
}

export default Ads