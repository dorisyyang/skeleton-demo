import { useState, useEffect } from 'react'
import { get } from 'src/api/createHttpRequest'
import { IFooterData } from 'src/components/layout/interface'
const useFooterData = () => {
    const [data, setData] = useState<IFooterData[]>([]);
    useEffect(() => {
        get("/api/footer")
          .then((data) => {
              if (data.code === 200) {
                setData(data.data)
              }
          });
       return (() => {
        setData([])
       })
    }, [])
    return data
}

export default useFooterData
