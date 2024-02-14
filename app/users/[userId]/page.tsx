import React from "react";

interface UserIdPageProps {
  params: {
    userId: string;
  };
}

const UserId = ({ params }: UserIdPageProps) => {
  return <div>UserId {params.userId}</div>;
};

export default UserId;
