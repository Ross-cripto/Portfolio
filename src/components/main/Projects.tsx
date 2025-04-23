import getColor from "../../utils/getColor"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { useTranslation } from "../../context/LanguajeContext"
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../types/projects"

import zentryImg from "../../assets/projects/zentry.webp"
import storeImg from "../../assets/projects/store.png"
import pomodoroImg from "../../assets/projects/pomodoro.png"
import nestImg from "../../assets/projects/nest.jpg"
import djangoImg from "../../assets/projects/django.jpg"

interface ImageMap {
  [key: string]: string;
}

const imageMap: ImageMap = {
  "Clone to Adwward Page": zentryImg,
  "Shoes Store": storeImg,
  "Pomodoro App": pomodoroImg,
  "Nest Series": nestImg,
  "Django Backend-Ecommerce": djangoImg,
}

const Projects: React.FC = () => {
  const { t } = useTranslation()

  const projects = t("projects")

  return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				{t("project_name")}
			</motion.h2>
			<div>
				{Array.isArray(projects) &&
					projects.map((project: projects, index) => (
						<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5 }}
								className="w-full lg:w-1/4 sm:w-1/2"
							>
								<img

									src={imageMap[project.title] || "/placeholder.svg"}
									alt={project.title}
									className="mb-6 rounded pr-16 w-full h-full lg:h-auto sm:mb-8"
								/>
							</motion.div>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
								className="w-full max-w-xl lg:w-3/4 mt-6 md:mt-0 sm:mb-8"
							>
								<div className="flex items-center mb-2 sm:mt-4">
									<span className="font-semibold hover:text-gray-200">
										{project.title}
									</span>
									{project.url && (
										<a
											href={project.url}
											className="ml-2 hover:text-gray-200"
											target="_blank"
											rel="noopener noreferrer"
											title="Open in new tab"
										>
											<FaExternalLinkAlt
												className="text-blue-500 hover:text-blue-700"
												style={{ fontSize: 15 }}
											/>
										</a>
									)}
									{project.code && (
										<a
											href={project.code}
											className="ml-2 hover:text-gray-200"
											target="_blank"
											rel="noopener noreferrer"
                      title="Open in new tab"
										>
											<FaGithub
												className="text-blue-500 hover:text-blue-700"
												style={{ fontSize: 15 }}
											/>
										</a>
									)}
								</div>
								<p className="mb-4 text-neutral-400">{project.description}</p>

								{project.technologies?.map((tech: string, index: number) => (
									<span
										key={index}
										className={`mr-2 rounded px-2 py-1 text-sm font-medium ${getColor(
											tech
										)}`}
									>
										{tech}
									</span>
								))}
							</motion.div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Projects

