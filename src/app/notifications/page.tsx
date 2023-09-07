import Image from "next/image";
import { LinkProps } from "next/link";

enum NotificationCategoryEnum {
  newFollower = "newfollower",
  newComment = "newComment",
  like = "like",
}

interface Notification {
  id: string;
  title: string;
  body?: string;
  url: string;
  category: NotificationCategoryEnum;
}

export interface NotificationListProps {
  notifications: Array<Notification>;
}

const NotificationItem = ({ notification }: { notification: Notification }) => {
  const isFollower =
    notification.category === NotificationCategoryEnum.newFollower;

  return (
    <li className="flex items-center justify-between gap-2 px-5 py-2 text-sm hover:bg-[--hover-bg-color]">
      <div className="flex items-center gap-2">
        <Image
          src="/profile.jpg"
          width={44}
          height={44}
          alt="user pic profile"
          className="rounded-full"
        />
        <div className="break-words">{notification.title}</div>
      </div>
      {isFollower ? (
        <button>Follow</button>
      ) : (
        <Image
          src="/post_img.jpg"
          width={44}
          height={44}
          alt="User notification post"
        />
      )}
    </li>
  );
};

const NotificationList = ({ notifications }: NotificationListProps) => {
  return (
    <div>
      <ul>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </ul>
    </div>
  );
};

export default function Notifications() {
  const newNotifications = [
    {
      id: "adlkj3234",
      title:
        "@username liked your comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://instagram.com",
      category: NotificationCategoryEnum.like,
    },
    {
      id: "38993fsdef",
      title: "@annarikta started following you",
      url: "https://instagram.com",
      category: NotificationCategoryEnum.newFollower,
    },
  ];
  return (
    <div className="flex w-full flex-col gap-10 divide-y">
      <section className="pt-3">
        <h2 className="pl-5 text-lg">New</h2>
        <NotificationList notifications={newNotifications}></NotificationList>
      </section>

      <section className="pt-3">
        <h2 className="pl-5 text-lg">This week</h2>
        <NotificationList notifications={newNotifications}></NotificationList>
      </section>

      <section className="pt-3">
        <h2 className="pl-5 text-lg">This month</h2>
        <NotificationList notifications={newNotifications}></NotificationList>
      </section>
    </div>
  );
}
