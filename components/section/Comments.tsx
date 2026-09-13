"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Send,
  Star,
} from "lucide-react";

type Comment = {
  id: number;
  name: string;
  email: string;
  message: string;
  rating: number;
  date: string;
};

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Jean",
    email: "jean@example.com",
    message:
      "Very clean portfolio. I really like the combination between networking and frontend development.",
    rating: 5,
    date: "Recently",
  },
  {
    id: 2,
    name: "Sarah",
    email: "sarah@example.com",
    message:
      "The design is modern and professional. The technical presentation is also very clear.",
    rating: 4,
    date: "Recently",
  },
  {
    id: 3,
    name: "Alex",
    email: "alex@example.com",
    message:
      "Excellent work. The interface shows a strong attention to detail and a good technical mindset.",
    rating: 5,
    date: "Recently",
  },
  {
    id: 4,
    name: "Michael",
    email: "michael@example.com",
    message:
      "I really enjoyed discovering the projects and the different areas of expertise.",
    rating: 5,
    date: "Recently",
  },
  {
    id: 5,
    name: "Emma",
    email: "emma@example.com",
    message:
      "Simple, elegant and technically interesting. Keep building!",
    rating: 4,
    date: "Recently",
  },
];

export default function Expertise() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !message || rating === 0) {
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name: email.split("@")[0],
      email,
      message,
      rating,
      date: "Just now",
    };

    setComments((current) => [newComment, ...current]);

    setEmail("");
    setMessage("");
    setRating(0);
    setHoverRating(0);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="comments"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F7F4]
        px-5
        py-24
        text-black
        sm:px-8
        sm:py-32
        lg:px-12
        lg:py-40
        xl:px-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#CBFB45]/20
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-[45%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 sm:mb-16 lg:mb-20"
        >
          <div className="mb-7 flex items-center gap-3">
            <motion.span
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
              }}
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#CBFB45]
                shadow-[0_0_14px_rgba(203,251,69,0.9)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-black/40
                sm:text-xs
              "
            >
              Comments
            </span>
          </div>

          <div className="overflow-hidden ">
            <motion.h2
              initial={{
                y: "100%",
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[1000px]
                text-[clamp(3.2rem,8vw,7.5rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.075em]
              "
            >
              What people
              <br />
              <span className="text-black/25 ">
                say.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <p
              className="
                max-w-[620px]
                text-sm
                leading-7
                text-black/50
                sm:text-base
              "
            >
              Your feedback matters. Share your experience,
              leave a comment and rate the portfolio.
            </p>

            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-black/30
              "
            >
              <MessageCircle size={14} />
              {comments.length} comments
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            COMMENTS SECTION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            overflow-hidden
            rounded-[32px]
            border
            border-black/10
            bg-white
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >

          {/* =================================================
              LEFT — WRITE COMMENT
          ================================================== */}

          <div
            className="
              border-b
              border-black/10
              p-7
              sm:p-10
              lg:border-b-0
              lg:border-r
              lg:p-12
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-black/35
                  "
                >
                  Leave a comment
                </span>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-semibold
                    tracking-[-0.05em]
                    sm:text-4xl
                  "
                >
                  Share your
                  <br />
                  <span className="text-black/25">
                    experience.
                  </span>
                </h3>
              </div>

              <div
                className="
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EFFFBD]
                  text-black
                  sm:flex
                "
              >
                <MessageCircle size={18} />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="comment-email"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  Your email
                </label>

                <input
                  id="comment-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-black/10
                    bg-[#F7F7F4]
                    px-4
                    py-4
                    text-sm
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-black/25
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* RATING */}

              <div>
                <p
                  className="
                    mb-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  Your rating
                </p>

                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active =
                      star <= (hoverRating || rating);

                    return (
                      <button
                        key={star}
                        type="button"
                        aria-label={`${star} star${
                          star > 1 ? "s" : ""
                        }`}
                        onMouseEnter={() =>
                          setHoverRating(star)
                        }
                        onMouseLeave={() =>
                          setHoverRating(0)
                        }
                        onClick={() =>
                          setRating(star)
                        }
                        className="
                          transition-transform
                          duration-200
                          hover:scale-110
                        "
                      >
                        <Star
                          size={26}
                          strokeWidth={1.5}
                          className={
                            active
                              ? "fill-[#CBFB45] text-black"
                              : "text-black/20"
                          }
                        />
                      </button>
                    );
                  })}

                  <span className="ml-2 text-xs text-black/35">
                    {rating > 0
                      ? `${rating}/5`
                      : "Select a rating"}
                  </span>
                </div>
              </div>

              {/* COMMENT */}

              <div>
                <label
                  htmlFor="comment-message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  Your comment
                </label>

                <textarea
                  id="comment-message"
                  required
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Tell me what you think..."
                  rows={6}
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-black/10
                    bg-[#F7F7F4]
                    px-4
                    py-4
                    text-sm
                    leading-6
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-black/25
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-black
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#CBFB45]
                  hover:text-black
                "
              >
                {submitted
                  ? "Comment submitted"
                  : "Publish comment"}

                <Send
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <p className="text-[10px] leading-5 text-black/30">
                Your email is required to submit a comment.
                It will not be displayed publicly.
              </p>
            </form>
          </div>

          {/* =================================================
              RIGHT — COMMENTS
          ================================================== */}

          <div className="min-h-[600px] p-7 sm:p-10 lg:p-12">

            <div className="flex items-center justify-between">
              <div>
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-black/35
                  "
                >
                  Community feedback
                </span>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-[-0.04em]
                    sm:text-3xl
                  "
                >
                  Recent comments
                </h3>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#EFFFBD]
                  px-3
                  py-2
                "
              >
                <Star
                  size={13}
                  className="fill-black"
                />

                <span className="text-xs font-semibold">
                  4.8
                </span>
              </div>
            </div>

            {/* SCROLL AREA */}

            <div
              className="
                mt-8
                max-h-[560px]
                overflow-y-auto
                pr-2
                scrollbar-thin
                scrollbar-track-transparent
                scrollbar-thumb-black/10
                hover:scrollbar-thumb-black/20
              "
            >
              <div className="space-y-3">

                {comments.map((comment, index) => (
                  <motion.article
                    key={comment.id}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="
                      rounded-[22px]
                      border
                      border-black/[0.07]
                      bg-[#F7F7F4]
                      p-5
                      transition-all
                      duration-300
                      hover:border-black/15
                      hover:bg-[#EFFFBD]/40
                    "
                  >
                    {/* COMMENT HEADER */}

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            text-xs
                            font-semibold
                            uppercase
                            text-[#CBFB45]
                          "
                        >
                          {comment.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold">
                            {comment.name}
                          </h4>

                          <p className="mt-0.5 text-[10px] text-black/30">
                            {comment.date}
                          </p>
                        </div>
                      </div>

                      {/* STARS */}

                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(
                          (star) => (
                            <Star
                              key={star}
                              size={13}
                              className={
                                star <= comment.rating
                                  ? "fill-[#CBFB45] text-black"
                                  : "text-black/15"
                              }
                            />
                          )
                        )}
                      </div>
                    </div>

                    {/* COMMENT */}

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-black/55
                      "
                    >
                      {comment.message}
                    </p>
                  </motion.article>
                ))}

              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-4
            rounded-[24px]
            border
            border-black/10
            bg-[#EFFFBD]
            p-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-7
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-black
                text-[#CBFB45]
              "
            >
              <MessageCircle size={17} />
            </div>

            <p className="text-sm font-medium">
              Every comment helps me improve and build better.
            </p>
          </div>

          <ArrowUpRight
            size={18}
            className="hidden sm:block"
          />
        </motion.div>

      </div>
    </section>
  );
}