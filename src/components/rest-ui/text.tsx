import { ndra_api } from "@/utils/api";
import { useEffect, useState } from "react";

interface Props {
  textUrl: string;
}

export const Text = (props: Props) => {
  const [content, setContent] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(true);

  const getContent = async () => {
    let data = await ndra_api.get(props.textUrl);

    if (data) {
      // console.log('content data::', data);
      setContent(data?.data);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  if (isFetching) {
    // return loading skeleton
    return <p>shimmers</p>;
  }

  return <div>{content}</div>;
};
