import { useState, useEffect } from 'react'
import { get } from 'src/api/createHttpRequest'
import { IHeaderData } from 'src/components/layout/interface'
const useHeaderData = () => {
    const [data, setData] = useState<IHeaderData>({} as IHeaderData);
    useEffect(() => {
        get("/api/header")
          .then((data) => {
              if (data.code === 200) {
                setData(data.data)
              }
          });
          return (() => {
            setData({} as IHeaderData)
           })
    }, [])
    return data
}

export default useHeaderData
