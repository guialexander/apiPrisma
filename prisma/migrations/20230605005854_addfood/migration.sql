-- CreateTable
CREATE TABLE "Foods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "restaurantId" TEXT,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Foods" ADD CONSTRAINT "Foods_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
