import React from 'react'
import { Card } from '../ui/card'

const About = () => {
  return (
   <Card className="p-6 mb-6">
        <h3 className="text-2xl font-bold mb-4">ZORIK</h3>
        <p className="text-gray-600 mb-4">
          Welcome! Feel free to dive and match these infographics based on your
          interests and the preferences of your target audience. Health &
          Wellness is a broad topic.
        </p>
        <div className="flex justify-between text-center mb-4">
          <div>
            <div className="font-bold">223K</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div>
            <div className="font-bold">36.2K</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
          <div>
            <div className="font-bold">223K</div>
            <div className="text-sm text-gray-600">Posts</div>
          </div>
        </div>
      </Card>
  )
}

export default About