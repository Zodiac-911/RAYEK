import { TbFlagFilled, TbFlag3Filled } from "react-icons/tb";
import { RiMessageFill } from "react-icons/ri";
import "../styles/post-card.css";
import usePocketBase from "../hooks/usePocketBase";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function PostCard({
  userIMG,
  username,
  postUserId, // Optional postUserId prop for future use
  postIMG,
  postText,
  postTime,
  postComments,
  postId, // Optional postId prop for future use
}) {
  const { user, pb } = usePocketBase();
  const queryClient = useQueryClient();

  const flagsData = useQuery({
    queryKey: ["posts", "flags", postId],
    queryFn: async () => {
      console.log(
        "Fetching flags for postId:",
        postId,
        "and userId:",
        user?.id
      );
      if (!postId) return { redFlags: 0, greenFlags: 0 };

      const redFlags = await pb.collection("flags").getList(1, 1, {
        filter: `post = "${postId}" && green = false`,
      });

      console.log("Red Flags:", redFlags);
      const greenFlags = await pb.collection("flags").getList(1, 1, {
        filter: `post = "${postId}" && green = true`,
      });

      console.log("Green Flags:", greenFlags);

      let userFlags = {
        redFlags: 0,
        greenFlags: 0,
        flagId: null,
      };

      if (user) {
        console.log(
          "Fetching user flags for postId:",
          postId,
          "and userId:",
          user.id
        );
        const userFlagsRes = await pb.collection("flags").getList(1, 1, {
          filter: `post = "${postId}" && giver = "${user.id}"`,
        });

        console.log("User Flags:", userFlagsRes);

        if (userFlagsRes?.items?.length > 0) {
          if (userFlagsRes.items[0].green) {
            userFlags.greenFlags = 1;
          } else {
            userFlags.redFlags = 1;
          }
          userFlags.flagId = userFlagsRes.items[0].id;
        }
      }

      const stats = {
        redFlags: redFlags.totalItems,
        greenFlags: greenFlags.totalItems,
        userFlags: userFlags,
      };

      console.log("Flags Stats:", stats);

      return stats;
    },
  });

  const toggleButton = async (buttonType) => {
    if (!user) return;

    if (flagsData.data?.userFlags.redFlags && buttonType == "redFlag") {
      // delete only
      await pb.collection("flags").delete(flagsData.data.userFlags.flagId);
      console.log("Deleted Red Flag Record:", flagsData.data.userFlags.flagId);
    } else if (
      flagsData.data?.userFlags.greenFlags &&
      buttonType == "greenFlag"
    ) {
      // delete only
      await pb.collection("flags").delete(flagsData.data.userFlags.flagId);
      console.log(
        "Deleted Green Flag Record:",
        flagsData.data.userFlags.flagId
      );
    } else if (
      !flagsData.data?.userFlags.redFlags &&
      !flagsData.data?.userFlags.greenFlags &&
      buttonType == "redFlag"
    ) {
      // create red flag
      const record = await pb.collection("flags").create({
        post: postId,
        receiver: postUserId,
        giver: user.id,
        green: false,
      });
    } else if (
      !flagsData.data?.userFlags.redFlags &&
      !flagsData.data?.userFlags.greenFlags &&
      buttonType == "greenFlag"
    ) {
      // create green flag
      const record = await pb.collection("flags").create({
        post: postId,
        receiver: postUserId,
        giver: user.id,
        green: true,
      });
    } else if (
      flagsData.data?.userFlags.redFlags &&
      buttonType == "greenFlag"
    ) {
      // delete red flag, create green flag
      await pb.collection("flags").delete(flagsData.data.userFlags.flagId);
      console.log("Deleted Red Flag Record:", flagsData.data.userFlags.flagId);
      const record = await pb.collection("flags").create({
        post: postId,
        receiver: postUserId,
        giver: user.id,
        green: true,
      });
    } else if (
      flagsData.data?.userFlags.greenFlags &&
      buttonType == "redFlag"
    ) {
      // delete green flag, create red flag
      await pb.collection("flags").delete(flagsData.data.userFlags.flagId);
      console.log(
        "Deleted Green Flag Record:",
        flagsData.data.userFlags.flagId
      );
      const record = await pb.collection("flags").create({
        post: postId,
        receiver: postUserId,
        giver: user.id,
        green: false,
      });
    }

    await queryClient.invalidateQueries(["posts", "flags", postId]);
    console.log("Flags data invalidated for postId:", postId);
  };

  return (
    <>
      <div className="post-container">
        <div className="post-header-holder">
          <Link to="/profile/id:" className="post-header">
            <img src={userIMG} alt="user" />
            <div>
              <h3>{username}</h3>
              <p>{postTime}</p>
            </div>
          </Link>
        </div>
        <div className="post-content">
          <p>{postText}</p>
          {postIMG && <img src={postIMG} alt="post" />}
        </div>
        <div className="post-bottom">
          <button
            className={`gf-btn ${
              flagsData.data?.userFlags.greenFlags ? "active" : ""
            }`}
            onClick={() => toggleButton("greenFlag")}
          >
            <TbFlagFilled className="cmnt-gf" />
            <span>
              <span className="text-hide">Green Flags | </span>
              <span className="post-btm-counter">
                {flagsData.data?.greenFlags || 0}
              </span>
            </span>
          </button>
          <button
            className={`rf-btn ${
              flagsData.data?.userFlags.redFlags ? "active" : ""
            }`}
            onClick={() => toggleButton("redFlag")}
          >
            <TbFlag3Filled className="cmnt-rf" />
            <span>
              <span className="text-hide">Red Flags | </span>
              <span className="post-btm-counter">
                {flagsData.data?.redFlags || 0}
              </span>
            </span>
          </button>
          <button className="cmnt-btn">
            <Link className="cmnt-link" to="/post">
              <RiMessageFill className="cmnt" />
              <span>
                <span className="text-hide">Comments | </span>
                <span className="post-btm-counter">{postComments}</span>
              </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default PostCard;
