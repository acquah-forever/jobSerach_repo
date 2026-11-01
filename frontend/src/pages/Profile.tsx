import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence, MotionConfig, type Variants } from "framer-motion"
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { Pencil, X, OctagonMinus } from "lucide-react"
import { useProfile, useCreateProfile, useUpdateProfile } from "../authContext/useAuth2";
import { useAbout, useCreateAbout, useUpdateAbout } from "../authContext/useAuth4"
import { ClipLoader } from "react-spinners";

countries.registerLocale(en);

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  organization: string;
  education: string;
  industry: string;
  phoneNumber: string;
  website: string;
}

interface AboutData {
  about: string;
}


const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2, when: "beforeChildren", staggerChildren: 0.09 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
}


const backdropMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
}

const dialogMotion = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 16, scale: 0.98 },
  transition: { duration: 0.22, ease: "easeOut" as const },
}


const FieldError = ({ message }: { message?: string }) => (
  <AnimatePresence initial={false}>
    {message && (
      <motion.span
        key="field-error"
        role="alert"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="text-red-500 text-sm font-semibold flex gap-1 items-center"
      >
        <OctagonMinus size={15} />
        {message}
      </motion.span>
    )}
  </AnimatePresence>
)

const SubmitError = ({ message }: { message: string | null }) => (
  <AnimatePresence initial={false}>
    {message && (
      <motion.p
        key="submit-error"
        role="alert"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="mt-3 text-sm font-semibold text-red-500"
      >
        {message}
      </motion.p>
    )}
  </AnimatePresence>
)

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.25 },
}


const Profile = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
  const { register: registerAbout, handleSubmit: handleSubmitAbout, reset: resetAbout, formState: { errors: errorsAbout } } = useForm<AboutData>()
  const [edit, setEdit] = useState<null | number>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { data: profile, isLoading } = useProfile()
  const { mutate: createProfile, isPending: isCreating } = useCreateProfile()
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile()
  const { data: info, isLoading: aboutLoading } = useAbout()
  const { mutate: createAbout, isPending: isCreatingAbout } = useCreateAbout()
  const { mutate: updateAbout, isPending: isUpdatingAbout } = useUpdateAbout()

  const isSaving = isCreating || isUpdating || isCreatingAbout || isUpdatingAbout

  const countryList = countries.getNames("en", {
    select: "official",
  });

  function handleEdit(index: number) {
    if (edit === index) {
      setEdit(null)
      return
    }

    setSubmitError(null)

    if (index === 1) {
      if (profile) {
        reset(profile)
      } else {
        reset()
      }
    }

    if (index === 2) {
      if (info) {
        resetAbout(info)
      } else {
        resetAbout()
      }
    }

    setEdit(index)
  }

  function onSubmitProfile(data: FormData) {

    setSubmitError(null)

    if (profile) {
      updateProfile(
        { data, id: profile._id }, {
        onSuccess: () => {
          setEdit(null)
        },
        onError: () => {
          setSubmitError("We couldn't update your profile. Try again later")
        },
      }
      )
    } else {
      createProfile(data, {
        onSuccess: () => {
          setEdit(null)
        },
        onError: () => {
          setSubmitError("We couldn't create your profile. Try again later")
        },
      })
    }

  }

  function onSubmitAbout(data: AboutData) {

    setSubmitError(null)

    if (info) {
      updateAbout(
        { data, id: info._id }, {
        onSuccess: () => {
          setEdit(null)
        },
        onError: () => {
          setSubmitError("We couldn't update your about section. Try again later")
        }
      }
      )
    } else {
      createAbout(data, {
        onSuccess: () => {
          setEdit(null)
        },
        onError: () => {
          setSubmitError("We couldn't create your about section. Try again later")

        }
      })
    }

  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="flex flex-col justify-center px-4 py-5 sm:px-8 lg:px-20"
        id="profile"
        variants={pageVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col px-0 sm:px-5">
          <motion.div variants={blockVariants} className="relative flex flex-col">
            <img className='w-full h-60 rounded-2xl object-cover object-center' src={"https://cdn.pixabay.com/photo/2019/11/30/18/18/course-4663835_1280.jpg"} alt="background-image" />
            <div className="absolute top-40 left-5 rounded-full bg-gray-300 w-40 h-40"></div>
          </motion.div>

          <AnimatePresence>
            {edit === 1 && (
              <motion.div
                key="profile-modal"
                {...backdropMotion}
                className="fixed inset-0 z-50 flex min-h-screen items-start justify-center overflow-y-auto bg-black/50 p-4 text-black sm:items-center sm:p-8"
              >
                <motion.div {...dialogMotion} className="my-auto w-full max-w-4xl rounded-lg border bg-white">
                  <div className="flex justify-between items-center px-5 py-3 border-b border-b-gray-300">
                    <h1 className="font-semibold text-xl">Edit Info</h1>
                    <button type="button" aria-label="Close edit profile dialog" onClick={() => setEdit(null)}>
                      <X className="cursor-pointer text-black" />
                    </button>
                  </div>
                  <form className="mx-0 max-h-[calc(100vh-4rem)] overflow-y-auto px-5 py-3 sm:mx-7" onSubmit={handleSubmit(onSubmitProfile)}>
                    <div className="mx-auto mb-3 flex gap-2 sm:justify-between">
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" className="border border-gray-300 rounded-md py-1 w-54 sm:w-70 md:w-80 lg:w-90 placeholder:text-sm px-2 hover:border-2 hover:border-blue-500" {...register("firstName", { required: "Firstname is required" })} />
                        <FieldError message={errors.firstName?.message} />
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="lastName">Lastname</label>
                        <input type="text" id="lastName" className="border border-gray-300 rounded-md py-1 w-47 sm:w-60 md:w-80 lg:w-90 placeholder:text-sm px-2 hover:border-2 hover:border-blue-500" {...register("lastName", { required: "Lastname is required" })} />
                        <FieldError message={errors.lastName?.message} />
                      </div>
                    </div>

                    <div className="relative flex flex-col mb-4">
                      <label className="text-sm" htmlFor="country">Country/Region</label>
                      <select id="country" className="w-full rounded-md border border-gray-300 p-2" {...register("country", { required: "Country is required" })}>
                        <option value="">Select a country</option>
                        {Object.entries(countryList).map(([code, name]) => (
                          <option className="text-sm" key={code} value={code}>{name}</option>
                        ))}
                      </select>
                      <FieldError message={errors.country?.message} />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label className="text-sm" htmlFor="organization">Organization</label>
                      <input type="text" id="organization" className="border border-gray-300 rounded-md py-1 w-full px-2 hover:border-2 hover:border-blue-500" {...register("organization", { required: "Organization is required" })} />
                      <FieldError message={errors.organization?.message} />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label className="text-sm" htmlFor="education">Education</label>
                      <input type="text" id="education" className="border border-gray-300 rounded-md py-1 w-full px-2 hover:border-2 hover:border-blue-500" {...register("education", { required: "Education is required" })} />
                      <FieldError message={errors.education?.message} />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label className="text-sm" htmlFor="industry">Industry</label>
                      <input type="text" id="industry" className="border border-gray-300 rounded-md py-1 w-full px-2 hover:border-2 hover:border-blue-500" {...register("industry", { required: "Industry is required" })} />
                      <FieldError message={errors.industry?.message} />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label className="text-sm" htmlFor="phone">Phone number</label>
                      <input type="tel" id="phone" className="border border-gray-300 rounded-md py-1 w-full px-2 hover:border-2 hover:border-blue-500" {...register("phoneNumber", { required: "Phone number is required", pattern: { value: /^[+()\d\s-]{7,}$/, message: "Enter a valid phone number" } })} />
                      <FieldError message={errors.phoneNumber?.message} />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label className="text-sm" htmlFor="website">Website URL</label>
                      <input type="url" id="website" className="border border-gray-300 rounded-md py-1 w-full px-2 hover:border-2 hover:border-blue-500" {...register("website", { required: "Website URL is required", pattern: { value: /^https?:\/\/.+/, message: "Enter a URL starting with http:// or https://" } })} />
                      <FieldError message={errors.website?.message} />
                    </div>

                    <SubmitError message={submitError} />

                    <div className="mt-10 flex justify-end">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isSaving}
                        className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSaving ? "Saving…" : "Submit"}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={blockVariants} className="flex justify-between mt-20 rounded-lg p-5 bg-white/10 backdrop-blur-xl border-b border-white/20">
            {isLoading && <div className="flex justify-center items-center"><ClipLoader size={70} color="#123abc" /></div>}
            {!isLoading && !profile && <motion.p {...fadeIn} className="mt-3 text-white">No profile information yet. Click the edit button above to add it.</motion.p>}
            {profile && (
              <motion.div {...fadeIn}>
                <div className="mt-3 flex gap-1">
                  <p className="text-2xl font-semibold">{profile.firstName} {profile.lastName}</p>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  <p className="text-md">{profile.organization}</p>
                  <p className="text-slate-200 text-sm">{countryList[profile.country] ?? profile.country}</p>
                  <p className="text-slate-200 text-sm">{profile.education}</p>
                </div>
              </motion.div>
            )}
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              aria-label="Pencil-Edit"
              onClick={() => handleEdit(1)}
              disabled={isLoading}
            >
              <Pencil className="cursor-pointer" size={25} />
            </motion.button>
          </motion.div>

          <motion.div variants={blockVariants} className="mt-2 rounded-lg p-5 bg-white/10 backdrop-blur-xl border-b border-white/20">
            <div className="flex justify-between mb-5">
              <h1>About</h1>
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                aria-label="Pencil-Edit"
                onClick={() => handleEdit(2)}
                disabled={aboutLoading}
              >
                <Pencil className="cursor-pointer" size={25} />
              </motion.button>
            </div>
            {aboutLoading && <div className="flex justify-center items-center"><ClipLoader size={70} color="#123abc" /></div>}
            {!aboutLoading && !info && <motion.p {...fadeIn} className="mt-3 text-white">No "About" details yet. Click the edit button above to add it.</motion.p>}

            {info &&
              <motion.p {...fadeIn} className="text-sm text-wrap">{info.about}</motion.p>}
          </motion.div>

          <AnimatePresence>
            {edit === 2 && (
              <motion.div
                key="about-modal"
                {...backdropMotion}
                className="fixed inset-0 z-50 flex min-h-screen items-start justify-center overflow-y-auto bg-black/50  text-black sm:items-center"
              >
                <motion.div {...dialogMotion} className="my-auto w-full h-170 max-w-4xl rounded-lg border bg-white px-5 py-3">
                  <div className="flex justify-between items-center border-b border-b-gray-300 mb-5">
                    <h1 className="font-semibold text-xl">Edit About</h1>
                    <button type="button" aria-label="Close edit profile dialog" onClick={() => setEdit(null)}>
                      <X className="cursor-pointer text-black" />
                    </button>
                  </div>
                  <p className="mb-4 text-sm">You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                  <form onSubmit={handleSubmitAbout(onSubmitAbout)}>
                    <textarea className="border rounded-lg w-full h-110 p-3 resize-none" {...registerAbout("about", { required: "About is required" })} id="about"></textarea>
                    <FieldError message={errorsAbout.about?.message} />
                    <SubmitError message={submitError} />
                    <div className="mt-3 flex justify-end">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isSaving}
                        className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSaving ? "Saving…" : "Submit"}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </MotionConfig>
  )
}

export default Profile
