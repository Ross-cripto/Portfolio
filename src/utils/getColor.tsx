const getColor: (tech: string) => string = (tech: string) => {
  if (tech === "React.js") {
    return "text-cyan-400"
  } else if (tech === "Next.js") {
    return "text-white-500"
  } else if (tech === "Node.js") {
    return "text-green-500"
  } else if (tech === "MongoDB") {
    return "text-green-500"
  } else if (tech === "Python") {
    return "text-yellow-500"
  } else if (tech === "Javascript") {
    return "text-yellow-500"
  } else if (tech === "HTML") {
    return "text-orange-500"
  } else if (tech === "CSS") {
    return "text-blue-500"
  }
  else if (tech === "mySQL") {
    return "text-amber-400"
  } else if (tech === "PostgreSQL") {
    return "text-blue-700"
  } else if (tech === "Django") {
    return "text-green-500"
  } else if (tech === "Nest.js") {
    return "text-red-600"
  } else if (tech === "TailwindCSS") {
    return "text-cyan-200"

  } else if (tech === "Docker") {
    return "text-blue-300"
  } else if (tech === "Redis") {
    return "text-red-600"
  } else if (tech === "Typescript") {
    return "text-blue-500"

  } else {
    return "text-neutral-400"
  }
  }

export default getColor